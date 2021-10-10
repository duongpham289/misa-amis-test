import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupProjectComponent } from './popup-project.component';
import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { ButtonModule } from '../../../base/button/button.module';
import { DxPopupModule, DxToastModule } from 'devextreme-angular';
import { UserListModule } from '../../../base/user-list/user-list.module';
import { SelectBoxModule } from '../../../base/select-box/select-box.module';
import { DateBoxModule } from '../../../base/date-box/date-box.module';
import { PopupMemberModule } from '../../popup-member/popup-member.module';



@NgModule({
  declarations: [PopupProjectComponent],
  imports: [
    CommonModule,
    
    //Component's Module import
    PopupMemberModule,
    UserListModule,
    TextFieldModule,
    SelectBoxModule,
    DateBoxModule,
    ButtonModule,
    
    //Devextreme's Module import
    DxPopupModule,
    DxToastModule
  ],
  exports: [PopupProjectComponent]
})
export class PopupProjectModule { }
