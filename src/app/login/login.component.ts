import { Component } from '@angular/core'
import { UserService } from '../services/user.service'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'LOGIN'
  date = Date.now()
  
  email = ''
  password = ''
  nick = ''

  activated = true
  users: any = {}
  operacion = 'login'
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private _cookie: CookieService) {}
  login() {
    this.authService.loginWithEmail(this.email, this.password).then( data => {
      this._cookie.put('uid', data.user.uid)
      this.router.navigateByUrl('home')
    }).catch(err => {
      alert('Error')
      console.log(err)
    })
  }
  register() {
    this.authService.registerWithEmail(this.email, this.password).then( data => {
      let user = {
        uid: data.user.uid,
        email: this.email,
        nick: this.nick
      }
      this.userService.createUser(user).then(data => {
      }).catch(err => {
        alert('Error')
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
