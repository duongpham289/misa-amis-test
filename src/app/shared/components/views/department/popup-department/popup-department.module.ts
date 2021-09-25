import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTemplateModule } from 'devextreme-angular';
import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { PopupDepartmentComponent } from './popup-department.component';
import { PopupModule } from '../../../base/popup/popup.module';



@NgModule({
  declarations: [
    PopupDepartmentComponent
  ],
  imports: [
    CommonModule,
    PopupModule,
    DxTemplateModule,
    TextFieldModule
  ],
  exports:[
    PopupDepartmentComponent
  ]
})
export class PopupDepartmentModule { }
