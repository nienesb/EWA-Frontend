import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { GradesComponent } from './grades.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [GradesComponent],
    exports: [GradesComponent]
})

export class GradesModule { }
