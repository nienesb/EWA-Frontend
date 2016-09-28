import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RemedialComponent } from './remedial.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [RemedialComponent],
    exports: [RemedialComponent]
})

export class RemedialModule { }
