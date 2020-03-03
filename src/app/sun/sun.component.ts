import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.css']
})
export class SunComponent implements OnInit {
  cookieValue = '';
  newColor: boolean;
  mdown: boolean;
  mup: boolean;
  mover: boolean;
  isPC: boolean;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    // this.cookieService.set( 'Test', 'Hello Sun' );
    // this.cookieValue = this.cookieService.get('Test');
    // console.log( 'this.cookieValue:'+this.cookieValue );

    this.checkCurrentDevice();
  }

  handleClick() {
    alert('Clicked!');
    this.newColor = true;
  }

  fun() {
    this.mover = true;
  }

  func1() {
    this.mdown = true;
    this.mup = false;
  }

  func2() {
    this.mup = true;
    this.mdown = false;
  }

  checkCurrentDevice() {
    let userAgentInfo = navigator.userAgent.toLowerCase();
    let agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    for (let i = 0; i < agents.length; i++) {
      // if (userAgentInfo.indexOf(agents[i]) > -1) {
      if (userAgentInfo.includes(agents[i].toLowerCase())) {
        this.isPC = false;
        break;
      } else {
        this.isPC = true;
      }
    }
    console.log('curr dvc is PC:'+this.isPC);
  }

}
