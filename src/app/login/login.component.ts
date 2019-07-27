import { Component } from '@angular/core'
import { UserService } from '../services/user.service'

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

  activated = true
  users = []
  operacion = 'login'
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers()
  }
  login() {
    alert(this.email)
  }
}
