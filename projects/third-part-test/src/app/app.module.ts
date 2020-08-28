import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdPartyLibModule } from 'third-party-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdPartyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
