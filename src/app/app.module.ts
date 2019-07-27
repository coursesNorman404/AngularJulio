import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing.modules';
import { ResaltarDirective } from './directives/resaltar.directive'
import { ContarClicksDirective } from './directives/contar-click.directive';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResaltarDirective,
    ContarClicksDirective,
    MenuComponent,
    ProfileComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
