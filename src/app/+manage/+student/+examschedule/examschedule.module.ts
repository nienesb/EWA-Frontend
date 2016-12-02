import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ExamScheduleComponent } from './examschedule.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [ExamScheduleComponent],
    exports: [ExamScheduleComponent]
})

export class ExamScheduleModule { }
