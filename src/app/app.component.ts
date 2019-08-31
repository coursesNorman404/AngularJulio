import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from './services/requests.service';
import { CookieService } from 'ngx-cookie';
import { UserService } from './services/user.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { RequestComponent } from './modals/request/request.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  request: any[] = [];
  mailsShow: any[] = [];
  user: any;
  deferredPrompt: any
  showButton = false
  constructor(
    public router: Router,
    private _cookie: CookieService,
    private userService: UserService,
    private requestsService: RequestsService,
    private dialogService: DialogService) {
      this.doRequests()
    }
    doRequests () {
      const userId = this._cookie.get('uid')
      if (userId) {
        this.userService.getUserById(userId).subscribe((res: any) => {
          this.user = res
          this.requestsService.getRequestForEmail(res.email).valueChanges().subscribe((data: any) => {
            this.request = data
            this.request = this.request.filter(r => {
              return r.status != 'accepted' && r.status != 'rejected'
            })
            this.request.forEach(r => {
              if (this.mailsShow.indexOf(r.sender) === -1) {
                this.mailsShow.push(r.sender)
                this.dialogService.addDialog(RequestComponent, {scope: this, currentRequest: r})
              }
            })
          })
        })
      }
    }
  @HostListener('window:beforeinstallprompt',['$event'])
  onbeforeinstallprompt(e) {
    console.log(e)
    e.preventDefault()
    this.deferredPrompt = e
    this.showButton = true
  }
  addHomeScreen() {
    this.showButton = false
    this.deferredPrompt.prompt()
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Use accepted')
        } else {
          console.log('Use dismissed')
        }
        this.deferredPrompt = null
      })
  }
}
