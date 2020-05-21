import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Oauth2Component } from './features/login/oauth2/oauth2.component';
import { MatchComponent } from './features/matches/match/match.component';
import { ChatComponent } from './features/matches/chat/chat.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    SharedModule,
    FormsModule,
    // core
    CoreModule,
    NgbModule,
    // app
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    Oauth2Component, 
    MatchComponent,
    ChatComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
