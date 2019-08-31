import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from './services/requests.service';
import { CookieService } from 'ngx-cookie';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public router: Router,
    private _cookie: CookieService,
    private userService: UserService,
    private requestsService: RequestsService) {
      this.doRequests()
    }
    doRequests () {
      const userId = this._cookie.get('uid')
      if (userId) {
        this.userService.getUserById(userId).subscribe((res: any) => {
          console.log(res.email)
          this.requestsService.getRequestForEmail(res.email).valueChanges().subscribe((data: any) => {
            console.log(data)
          })
        })
      }
    }
}
