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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BootstrapModalModule } from 'ng2-bootstrap-modal'

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
import { RequestComponent } from './modals/request/request.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    SearchPipe,
    RequestComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    CookieModule.forRoot(),
    ImageCropperModule,
    NgbModule,
    BootstrapModalModule.forRoot({container: document.body}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RequestComponent]
})
export class AppModule { }
