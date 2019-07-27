import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {name: 'Norman', email: 'norman@gmail.com', status: true, type: "free", id: 1},
    {name: 'Norman Antonio', email: 'antonio@gmail.com', status: false, type: "pay", id: 2},
    {name: 'Torres', email: 'torres@gmail.com', status: false , type: "aa", id: 3},
    {name: 'Norman Gutierrez', email: 'gutierrez@gmail.com', status: true, type: "free", id: 4},
    {name: 'Juan', email: 'juan@gmail.com', status: false, type: "aa", id: 5},
    {name: 'Paco', email: 'paco@gmail.com', status: true, type: "pay", id: 6}
  ]
  getUserInfo (id) {
   return this.users.filter(user => user.id == id)[0]
  }
  getUsers () {
    return this.users
  }
}