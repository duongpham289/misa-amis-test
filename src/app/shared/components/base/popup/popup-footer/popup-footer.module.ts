import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupFooterComponent } from './popup-footer.component';
import { ButtonModule } from '../../button/button.module';



@NgModule({
  declarations: [
    PopupFooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    PopupFooterComponent
  ]
})
export class PopupFooterModule { }
