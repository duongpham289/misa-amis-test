import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupTaskComponent } from './popup-task.component';
import { ButtonModule } from '../../../base/button/button.module';
import { DxPopupModule } from 'devextreme-angular';



@NgModule({
  declarations: [PopupTaskComponent],
  imports: [
    CommonModule,
    
    ButtonModule,
    DxPopupModule,
  ], 
  exports: [PopupTaskComponent]
})
export class PopupTaskModule { }
