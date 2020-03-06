import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MaskLayerService } from './mask-layer.service';
import { Select, Store } from '@ngxs/store';
import { MaskLayerSelectors } from './state/mask-layer.selectors';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { SetEventMessage } from './state/mask-layer.actions';

@Component({
  selector: 'u-mask-layer',
  templateUrl: './mask-layer.component.html',
  styleUrls: ['./mask-layer.component.scss']
})

export class MaskLayerComponent implements OnInit {
  isShowMaskLayer: boolean;
  isWelcomeStart: boolean;
  isApplyIntro: boolean;
  isCartIntro: boolean;
  isAoIntro: boolean;
  isOrderCheckIntro: boolean;
  isBindingIntro: boolean;
  isIntroEnd: boolean;
  welMouseDown: boolean;
  welMouseUp: boolean;
  btnUnderstoodMdown: boolean;
  btnUnderstoodMup: boolean;
  isPC: boolean;
  duration: number = 365*24*60*60*1000;
  expiresDate: Date = new Date();
  publishedMesssage: string = 'ApplyInfoClicked';
  bindingAddress: string = "https://today.baoying.com/mvc/autoAlipayBinding/getAlipayBindAcct";

  subscription = new Subscription();

  constructor(public MaskLayerService: MaskLayerService, private store: Store) { }

  ngOnInit(): void {
    this.isShowMaskLayer = false;
    this.isWelcomeStart = true;
    this.isApplyIntro = false;
    this.isCartIntro = false;
    this.isAoIntro = false;
    this.isOrderCheckIntro = false;
    this.isBindingIntro = false;
    this.isIntroEnd = false;
    this.checkCurrentDevice();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  handleMaskLayer() {
    console.log('---handleMaskLayer()---');
    let cookieArr = document.cookie.split(';').filter(item => item.includes('guide_cover'));
    if (cookieArr && (cookieArr.length!=0)) {
      this.isShowMaskLayer = false;
    } else {
      this.isShowMaskLayer = true;
      this.expiresDate.setTime(this.expiresDate.getTime() + this.duration);
      document.cookie = "guide_cover=1;expires=" + this.expiresDate.toUTCString();
    }
    console.log('this.isShowMaskLayer:'+this.isShowMaskLayer);
  }

  checkAuthToken() {
    console.log('---checkAuthToken()---');
    let sessionId = sessionStorage.getItem('sessionId');
    console.log('---sessionId: ' + sessionId + '---');
    if (sessionId) {
      this.handleMaskLayer();
    }
  }

  checkCurrentDevice() {
      console.log('---checkCurrentDevice()---');
      let userAgentInfo = navigator.userAgent.toLowerCase();
      let agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");

      for (let i = 0; i < agents.length; i++) {
          if (userAgentInfo.includes(agents[i].toLowerCase())) {
              this.isPC = false;
              break;
          } else {
              this.isPC = true;
          }
      }
      console.log('---this.isPC: '+this.isPC+'---');
      if (this.isPC) {
        this.checkAuthToken();
      }
  }

  selectStart() {
    console.log('---selectStart()---');
    this.isWelcomeStart = false;
    this.isApplyIntro = true;
  }

  gotApplyInfo() {
    console.log('---gotApplyInfo()---');
    this.isApplyIntro = false;
    this.isCartIntro = true;

    //call service
    this.MaskLayerService.observeEventMessageTrigger(this.publishedMesssage);
  }

  gotCartInfo() {
    this.isCartIntro = false;
    this.isAoIntro = true;
  }

  gotAoInfo() {
    this.isAoIntro = false;
    this.isOrderCheckIntro = true;
  }

  gotOrderCheckInfo($event: Event) {
    $event.stopPropagation();
    this.isOrderCheckIntro = false;
    this.isBindingIntro = true;
  }

  gotBindingInfo() {
    if (this.isBindingIntro) {
      this.isShowMaskLayer = false;
    }
  }

  gotBindingAddress() {
    window.location.href = this.bindingAddress;
  }

  handleMouseDown(stepdown:string) {
    if (stepdown == "wel") {
      this.welMouseDown = true;
      this.welMouseUp = false;
    } else if (stepdown == "understood") {
      this.btnUnderstoodMdown = true;
      this.btnUnderstoodMup = false;
    }
  }

  handleMouseUp(stepup:string) {
    if (stepup == "wel") {
      this.welMouseUp = true;
      this.welMouseDown = false;
    } else if (stepup == "understood") {
        this.btnUnderstoodMup = true;
        this.btnUnderstoodMdown = false;
    }
  }

}
