import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing.modules';
import { ResaltarDirective } from './directives/resaltar.directive'
import { ContarClicksDirective } from './directives/contar-click.directive'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResaltarDirective,
    ContarClicksDirective
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
