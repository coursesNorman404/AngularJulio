import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService} from '../services/user.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string = ''
  user: any = {}
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.user = this.userService.getUserInfo(this.route.snapshot.params.id)
    console.log(this.user)
  }

  ngOnInit() {
  }

}
