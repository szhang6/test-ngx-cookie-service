import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetEventMessage } from './mask-layer.actions';
import { MaskLayerStateModel } from './mask-layer.state.model';
import { Injectable } from '@angular/core';

@State<MaskLayerStateModel>({
  name: 'MaskLayer',
  defaults: {
      eventMessage: ''
  }
})

@Injectable()
export class MaskLayerState {
  constructor() {}

  @Action(SetEventMessage)
  setEventMessage({ patchState, dispatch }: StateContext<MaskLayerStateModel>, { eventMessage }: SetEventMessage) {
    console.log( '---@Action(SetEventMessage)---' );
    patchState({ eventMessage });
    return dispatch(new SetEventMessage('eventMessage'));
  }
}
