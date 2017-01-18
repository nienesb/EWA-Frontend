import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TeacherComponent } from './teacher.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [TeacherComponent],
    exports: [TeacherComponent]
})

export class TeacherModule { }
