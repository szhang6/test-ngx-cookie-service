import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { SunComponent } from './sun/sun.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
