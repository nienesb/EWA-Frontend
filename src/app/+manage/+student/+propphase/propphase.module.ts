import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { PropPhaseComponent } from './propphase.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [PropPhaseComponent],
    exports: [PropPhaseComponent]
})

export class PropPhaseModule { }
