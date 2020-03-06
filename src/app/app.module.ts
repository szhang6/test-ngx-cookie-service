import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { SunComponent } from './sun/sun.component';
import { MoonComponent } from './moon/moon.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    MoonComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
