import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MaskLayerState } from './state/mask-layer.state';
import { State, Action, StateContext, Select, Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})

export class MaskLayerService {
  constructor(private store: Store) {}

  private subject = new Subject();

  // Subject logic
  // sendMessage(message: any) {
  //     console.log('---sendMessage()---');
  //     this.subject.next(message);
  // }
  //
  // receiveMessage(): Observable<any> {
  //     console.log('---receiveMessage()---');
  //     return this.subject.asObservable();
  // }


  //new logic
  observeEventMessageTrigger(eventMessage: string) {
     //this.subject.next(this.triggerEventMessage(eventMessage));
  }

  triggerEventMessage(eventMessage: string) {
      //return this.store.dispatch(new SetEventMessage(eventMessage));
  }
}
