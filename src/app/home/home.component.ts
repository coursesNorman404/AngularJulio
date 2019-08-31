import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {CookieService} from 'ngx-cookie'
import { User } from '../intercafes/user'

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myUser: User = {
    nick: 'Norman404',
    status: 'online',
    email: 'pepe@gmail.com',
    uid: 'aaa'
  }
  firneds = null
  friendEmail: string
  closeResult: string;
  constructor(private userService: UserService,
    private _cookie: CookieService,
    private modalService: NgbModal,
    private requestsService: RequestsService) {
    console.log(this._cookie.get('uid'))
    this.userService.getUserById(this._cookie.get('uid')).subscribe(
      (res:User) => {
      this.myUser = res
      console.log(this.myUser)
    })
    this.userService.getUsers().subscribe( res => {
      this.firneds = Object.keys(res).map(key => {
        return res[key]
      })
    })
  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  sendRequest() {
    const request = {
      receiver_email: this.friendEmail,
      sender: this.myUser.uid,
      status: 'pending',
      timestamp: Date.now()
    }
    this.requestsService.createRequest(request).then(()=> {
      alert('Solicitud Enviada')
      
    })
  }
}
