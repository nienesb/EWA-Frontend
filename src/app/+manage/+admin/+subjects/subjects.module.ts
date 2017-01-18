import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { SubjectsComponent } from './subjects.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [SubjectsComponent],
    exports: [SubjectsComponent]
})

export class SubjectsModule { }
