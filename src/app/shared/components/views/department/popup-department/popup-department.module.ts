import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { PopupDepartmentComponent } from './popup-department.component';
import { PopupModule } from '../../../base/popup/popup.module';
import { PopupFooterModule } from '../../../base/popup/popup-footer/popup-footer.module';
import { DxPopupModule } from 'devextreme-angular';
import { ButtonModule } from '../../../base/button/button.module';



@NgModule({
  declarations: [
    PopupDepartmentComponent
  ],
  imports: [
    CommonModule,
    
    TextFieldModule,
    ButtonModule,
    DxPopupModule,
  ],
  exports:[
    PopupDepartmentComponent
  ]
})
export class PopupDepartmentModule { }
