import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, SharedModule, CalendarModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
