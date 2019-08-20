import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { HttpClientModule } from '@angular/common/http'
import { CookieModule } from 'ngx-cookie'
import { ImageCropperModule } from 'ngx-image-cropper'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing.modules';
import { ResaltarDirective } from './directives/resaltar.directive'
import { ContarClicksDirective } from './directives/contar-click.directive';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component'
import { SearchPipe } from './pipes/search';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC7sxTSmXR-leyPCldVgIWwRGiK4aSPfZs',
    authDomain: 'clase-a86ee.firebaseapp.com',
    databaseURL: 'https://clase-a86ee.firebaseio.com',
    projectId: 'clase-a86ee',
    storageBucket: 'clase-a86ee.appspot.com',
    messagingSenderId: '126498156773'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResaltarDirective,
    ContarClicksDirective,
    MenuComponent,
    ProfileComponent,
    ChatComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    CookieModule.forRoot(),
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
