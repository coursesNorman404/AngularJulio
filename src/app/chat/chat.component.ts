import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../services/user.service';
import { ConversationService } from '../services/conversation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  friendId: any;
  frinend: any = {
    nick: ''
  };
  conversationId: string
  textMessage: string;
  message: any = {}
  conversation: any = []
  myUser: any = {}
  shake = false
  constructor(
    private activatedRouter: ActivatedRoute,
    private _cookie: CookieService,
    private userService: UserService,
    private conversationService: ConversationService
  ) {
    this.friendId = this.activatedRouter.snapshot.params['id']
    this.userService.getUserById(this.friendId).subscribe((res:any)=> {
      this.frinend = res
      this.userService.getUserById(this._cookie.get('uid')).subscribe((res:any) => {
        this.myUser = res
        const ids = [this.myUser.uid, this.frinend.uid].sort()
        this.conversationId = ids.join('|')
        this.getConversation()
      })
    })
  }

  ngOnInit() {
  }

  sendMessage() {
    const message = {
      uid: this.conversationId,
      text: this.textMessage,
      type: 'text',
      sender: this.myUser.uid,
      receiver: this.frinend.uid,
      timestamp: Date.now()
    }
    this.conversationService.createConversation(message).then(()=> {
      this.textMessage = ""
    })
  }
  getConversation() {
    this.conversationService.getConversation(this.conversationId)
    .valueChanges().subscribe((data: any) => {
      this.conversation = data
      this.conversation.forEach(message => {
        if (!message.seen) {
          message.seen = true
          this.conversationService.editConversation(message)
          if (message.type == 'text') {
            const audio = new Audio('assets/sound/new_message.m4a')
            audio.play().then(()=> {})
          }else {
            this.doZumbido()
          }
        }
      });
    })
  }
  sendZumbido () {
    const message = {
      uid: this.conversationId,
      text: '(Zumbido)',
      type: 'zumbido',
      sender: this.myUser.uid,
      receiver: this.frinend.uid,
      timestamp: Date.now()
    }
    this.conversationService.createConversation(message).then(()=> {})
    // this.doZumbido()
  }
  doZumbido() {
    const audio = new Audio('assets/sound/zumbido.m4a')
    audio.play().then()
    this.shake = true
    window.setTimeout(()=> {
      this.shake = false
    }, 1000)
  }
  getUserById(uid) {
    if (uid === this.frinend.uid) {
      return this.frinend.nick
    } else {
      return this.myUser.nick
    }
  }
}
