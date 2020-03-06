import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { MaskLayerState } from './mask-layer.state';
import { MaskLayerAction, SetEventMessage } from './mask-layer.actions';

describe('MaskLayerState', () => {
  let store: Store;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [NgxsModule.forRoot([MaskLayerState])]
  //   }).compileComponents();
  //   store = TestBed.get(Store);
  // }));

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [NgxsModule.forRoot([MaskLayerState])]
      });

      store = TestBed.get(Store);
      store.reset({
          MaskLayer: {
              eventMessage: ""
          }
      });

      spyOn(store, 'dispatch').and.callThrough();
  });

  // it('should create an action and add an item', () => {
  //   store.dispatch(new MaskLayerAction('item-1'));
  //   store.select(state => state.MaskLayer.items).subscribe((items: string[]) => {
  //     expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
  //   });
  // });

});
