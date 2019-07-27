import { Component } from '@angular/core'

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
  users = [
    {name: 'Norman', email: 'norman@gmail.com', status: true, type: "free"},
    {name: 'Antonio', email: 'antonio@gmail.com', status: false, type: "pay"},
    {name: 'Torres', email: 'torres@gmail.com', status: false , type: "aa"},
    {name: 'Gutierrez', email: 'gutierrez@gmail.com', status: true, type: "free"},
    {name: 'Juan', email: 'juan@gmail.com', status: false, type: "aa"},
    {name: 'Paco', email: 'paco@gmail.com', status: true, type: "pay"}
  ]
  login() {
    alert(this.email)
  }
}
