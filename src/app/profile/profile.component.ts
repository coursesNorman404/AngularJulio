import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService} from '../services/user.service'
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CookieService } from 'ngx-cookie'
import { AngularFireStorage } from '@angular/fire/storage'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string = ''
  user: any = {}
  picture: any
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private router: Router,
    private _cookie: CookieService,
    private fbStorage: AngularFireStorage,
    private userService: UserService) {
    this.userService.getUserById(this._cookie.get('uid')).subscribe((res:any) => {
      this.user = res
    })
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
  ngOnInit() {
  }
  update(){
    if (this.croppedImage) {
      const currentPictureId = Date.now()
      const pictures = this.fbStorage.ref('pictures/'+ currentPictureId+'.jpg').putString(this.croppedImage, 'data_url')
      pictures.then(res => {
        this.picture =  this.fbStorage.ref('pictures/'+ currentPictureId+'.jpg').getDownloadURL()
        this.picture.subscribe(res => {
          this.user.avatar = res
          this.userService.updateUser(this.user)
          this.router.navigateByUrl('home')
        })
      }).catch(err => {
        console.log(err)
      })
    }else {
      this.userService.updateUser(this.user)
      this.router.navigateByUrl('home')
    }
   
  }

}
