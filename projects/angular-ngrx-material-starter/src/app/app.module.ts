import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Oauth2Component } from './features/login/oauth2/oauth2.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,
    NgbModule,
    // app
    AppRoutingModule
  ],
  declarations: [AppComponent, Oauth2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
