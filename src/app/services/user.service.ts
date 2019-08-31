import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_ENDPOINT = 'https://clase-a86ee.firebaseio.com'
  constructor (
    private angularFireDatabase: AngularFireDatabase,
    private http: HttpClient) {}
  getUsers() {
    //return this.angularFireDatabase.list('/users')
    return this.http.get(`${this.API_ENDPOINT}/users.json`)
  }
  getUserById(uid: string) {
    // return this.angularFireDatabase.object('/users/'+ uid)
    return this.http.get(`${this.API_ENDPOINT}/users/${uid}.json`)
  }
  createUser(user) {
    return this.angularFireDatabase.object('/users/'+user.uid).set(user)
  }
  updateUser(user) {
    return this.angularFireDatabase.object('/users/'+user.uid).set(user)
  }
  addFriend(userId, frinedId) {
    this.angularFireDatabase.object('/users/'+userId+'/friends/'+frinedId).set(frinedId)
    return this.angularFireDatabase.object('/users/'+frinedId+'/friends/'+userId).set(userId)
  }
}