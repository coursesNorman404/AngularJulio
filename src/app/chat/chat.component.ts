import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: any = {}
  chat: any = []
  myUser: any = {}
  constructor() { }

  ngOnInit() {
  }

}