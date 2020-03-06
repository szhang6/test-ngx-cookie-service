import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskLayerComponent } from './mask-layer.component';
import { NgxsModule } from '@ngxs/store';
//import { MaskLayerService } from './mask-layer.service';
import { MaskLayerState } from './state/mask-layer.state';

@NgModule({
    declarations: [MaskLayerComponent],
    imports: [CommonModule, NgxsModule.forFeature([MaskLayerState])],
    exports: [MaskLayerComponent],
    //providers: [MaskLayerService],
    entryComponents: [MaskLayerComponent]
})
export class MaskLayerModule {}
