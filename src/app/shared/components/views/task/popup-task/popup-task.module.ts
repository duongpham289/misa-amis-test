import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupTaskComponent } from './popup-task.component';
import { PopupFooterModule } from '../../../base/popup/popup-footer/popup-footer.module';



@NgModule({
  declarations: [PopupTaskComponent],
  imports: [
    CommonModule,
    PopupFooterModule
  ], 
  exports: [PopupTaskComponent]
})
export class PopupTaskModule { }
