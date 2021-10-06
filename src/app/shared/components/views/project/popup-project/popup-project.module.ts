import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupProjectComponent } from './popup-project.component';
import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { ButtonModule } from '../../../base/button/button.module';
import { DxPopupModule } from 'devextreme-angular';
import { UserListModule } from '../../../base/user-list/user-list.module';
import { SelectBoxModule } from '../../../base/select-box/select-box.module';
import { DateBoxModule } from '../../../base/date-box/date-box.module';
import { PopupMemberModule } from '../../popup-member/popup-member.module';



@NgModule({
  declarations: [PopupProjectComponent],
  imports: [
    CommonModule,
    
    PopupMemberModule,
    UserListModule,
    TextFieldModule,
    SelectBoxModule,
    DateBoxModule,
    ButtonModule,
    DxPopupModule,
  ],
  exports: [PopupProjectComponent]
})
export class PopupProjectModule { }
