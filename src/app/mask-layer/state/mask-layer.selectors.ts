import {Selector} from '@ngxs/store';
import {MaskLayerState} from './mask-layer.state';
import {MaskLayerStateModel} from './mask-layer.state.model';

export class MaskLayerSelectors {
    @Selector([MaskLayerState])
    public static getEventMessage(state: MaskLayerStateModel): string {
        console.log('---@Selector.getClickMessage() exec---, state.eventMessage: ' + state.eventMessage);
        return state.eventMessage;
    }
}
