import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  DxPopupModule,
  DxTextBoxModule,
  DxTemplateModule
} from 'devextreme-angular';

import { PopupDepartmentComponent } from './popup-department/popup-department.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [
    PopupComponent,
    PopupDepartmentComponent,
    TextFieldComponent
  ],
  exports: [
    PopupComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule
  ]
})
export class PopupModule { }