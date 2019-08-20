import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {CookieService} from 'ngx-cookie'
import { User } from '../intercafes/user'

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
  constructor(private userService: UserService, private _cookie: CookieService) {
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

}
