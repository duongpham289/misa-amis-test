import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupMemberComponent } from './popup-member.component';
import { DxDataGridModule, DxPopupModule } from 'devextreme-angular';
import { TextFieldModule } from '../../base/text-field/text-field.module';
import { ButtonModule } from '../../base/button/button.module';



@NgModule({
  declarations: [
    PopupMemberComponent
  ],
  imports: [
    CommonModule,

    DxDataGridModule,
    DxPopupModule,
    TextFieldModule,
    ButtonModule,
  ],
  exports:[
    PopupMemberComponent
  ]
})
export class PopupMemberModule { }
