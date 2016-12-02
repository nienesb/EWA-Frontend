import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StudentComponent } from './student.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [StudentComponent],
    exports: [StudentComponent]
})

export class StudentModule { }
