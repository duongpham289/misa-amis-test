import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateBoxComponent } from './date-box.component';
import { DxDateBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [DateBoxComponent],
  imports: [
    CommonModule,

    DxDateBoxModule
  ],
  exports: [DateBoxComponent]
})
export class DateBoxModule { }
