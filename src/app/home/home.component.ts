import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myUser = {
    nick: 'Norman404',
    status: 'online',
    subNick: null
  }
  firneds = [
    {uid: '1234', nick: 'norman404', status: 'online', email: 'norman.torres.mx@gmail.com', subNick: 'Esto es un mensaje'},
    {uid: '1235', nick: 'norman405', status: 'online', email: 'norman@gmail.com', subNick: null},
    {uid: '1236', nick: 'norman406', status: 'online', email: 'norman.mx@gmail.com', subNick: 'jaja'},
    {uid: '1234', nick: 'norman404', status: 'online', email: 'norman.torres.mx@gmail.com', subNick: 'Esto es un mensaje'},
    {uid: '1235', nick: 'norman405', status: 'online', email: 'norman@gmail.com', subNick: null},
    {uid: '1234', nick: 'norman404', status: 'online', email: 'norman.torres.mx@gmail.com', subNick: 'Esto es un mensaje'},
    {uid: '1235', nick: 'norman405', status: 'online', email: 'norman@gmail.com', subNick: null},
    {uid: '1234', nick: 'norman404', status: 'online', email: 'norman.torres.mx@gmail.com', subNick: 'Esto es un mensaje'},
    {uid: '1235', nick: 'norman405', status: 'online', email: 'norman@gmail.com', subNick: null},
    {uid: '1234', nick: 'norman404', status: 'online', email: 'norman.torres.mx@gmail.com', subNick: 'Esto es un mensaje'},
    {uid: '1235', nick: 'norman405', status: 'online', email: 'norman@gmail.com', subNick: null},
    {uid: '1234', nick: 'norman404', status: 'online', email: 'norman.torres.mx@gmail.com', subNick: 'Esto es un mensaje'},
    {uid: '1235', nick: 'norman405', status: 'online', email: 'norman@gmail.com', subNick: null},
    

  ]
  constructor() { }

  ngOnInit() {
  }

}
