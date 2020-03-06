import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaskLayerComponent } from './mask-layer.component';
import { NgxsModule, Store } from '@ngxs/store';
import { MaskLayerState } from './state/mask-layer.state';
import { MaskLayerService } from './mask-layer.service';

describe('MaskLayerComponent', () => {
  let component: MaskLayerComponent;
  let fixture: ComponentFixture<MaskLayerComponent>;
  let MaskLayerService: MaskLayerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskLayerComponent ],
      imports: [NgxsModule.forRoot([MaskLayerState])],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('#selectStart() should set #isWelcomeStart #isApplyIntro boolean', () => {
  //     const comp = new MaskLayerComponent(MaskLayerService);
  //     comp.selectStart();
  //     expect(comp.isWelcomeStart).toBe(false, 'on after click');
  //     expect(comp.isApplyIntro).toBe(true, 'on after click');
  // });
  //
  // it('#gotCartInfo() should set #isCartIntro #isAoIntro boolean', () => {
  //     const comp = new MaskLayerComponent(MaskLayerService);
  //     comp.gotCartInfo();
  //     expect(comp.isCartIntro).toBe(false, 'on after click');
  //     expect(comp.isAoIntro).toBe(true, 'on after click');
  // });
  //
  // it('#gotAoInfo() should set #isAoIntro #isOrderCheckIntro boolean', () => {
  //     const comp = new MaskLayerComponent(MaskLayerService);
  //     comp.gotAoInfo();
  //     expect(comp.isAoIntro).toBe(false, 'on after click');
  //     expect(comp.isOrderCheckIntro).toBe(true, 'on after click');
  // });

});
