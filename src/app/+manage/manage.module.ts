import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ManageComponent } from './manage.component';
import { ManageRoutes } from './manage.routes';

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild(ManageRoutes)],
    declarations: [ManageComponent],
    exports: [ManageComponent, RouterModule]
})

export class ManageModule { }
