import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { SunComponent } from './sun/sun.component';
import { MoonComponent } from './moon/moon.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    MoonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
