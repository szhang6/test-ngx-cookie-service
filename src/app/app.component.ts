import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  title = 'test-ngx-cookie-service';
  cookieValue = '';
  isHasCookie: boolean;
  isShowGuideCover: boolean;
  isShowPopOver:boolean;
  isReplyEnabled:boolean;

  handleGuideCover() {
    let cookieArr = document.cookie.split(";").filter(item => item.includes('guide_cover'));
    if (cookieArr && (cookieArr.length!=0)) {
      this.isShowGuideCover = false;
    } else {
      this.isShowGuideCover = true;
      document.cookie = "guide_cover=1";
    }

    // console.log('this.isShowGuideCover:'+this.isShowGuideCover);
  }

  handleAvatarClick() {
    this.isShowPopOver = true;
  }

  handlePopoverOutside() {
    this.isShowPopOver = false;
  }

  // this is for testing [ngClass] directive usage.
  handleReplyClick() {
    if (this.isReplyEnabled == false) {
      this.isReplyEnabled = true;
    } else {
      this.isReplyEnabled = false;
    }
  }
 
  ngOnInit(): void {
    this.handleGuideCover();
    this.isReplyEnabled = false;
  }
}
