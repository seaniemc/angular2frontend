import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import {PhotoList} from './components/photo-list.component';
import {SidePanel} from './components/side-panel.component';
import {NavBar} from './components/nav-bar.component';
import {Register} from './components/register.component';
import { Login } from './components/login.component';

import {PhotoService} from './services/photo.service';
import {RegisterService} from './services/register.service';
import {LoginService} from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    Register,
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PhotoService,
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
