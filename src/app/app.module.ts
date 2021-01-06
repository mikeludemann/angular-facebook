import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookComponent } from './facebook-embed/facebook/facebook.component';
import { FacebookMessengerComponent } from './facebook-embed/facebook-messenger/facebook-messenger.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    FacebookMessengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
