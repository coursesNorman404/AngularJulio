import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() uid:string
  contact: any
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(this.uid).subscribe(user => {
      this.contact = user
    })
  }

}
