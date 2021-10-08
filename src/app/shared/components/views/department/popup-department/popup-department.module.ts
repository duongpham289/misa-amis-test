import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { PopupDepartmentComponent } from './popup-department.component';
import { DxPopupModule } from 'devextreme-angular';
import { ButtonModule } from '../../../base/button/button.module';
import { UserListModule } from '../../../base/user-list/user-list.module';



@NgModule({
  declarations: [
    PopupDepartmentComponent
  ],
  imports: [
    CommonModule,
    
    //Component's Module import
    UserListModule,
    TextFieldModule,
    ButtonModule,
    
    //Devextreme's Module import
    DxPopupModule,
  ],
  exports:[
    PopupDepartmentComponent
  ]
})
export class PopupDepartmentModule { }
