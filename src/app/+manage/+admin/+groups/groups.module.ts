import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { GroupsComponent } from './groups.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [GroupsComponent],
    exports: [GroupsComponent]
})

export class GroupsModule { }
