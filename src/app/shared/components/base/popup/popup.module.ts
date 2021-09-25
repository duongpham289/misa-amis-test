import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DxPopupModule,
  DxTextBoxModule,
  DxTemplateModule,
  DxTextAreaModule
} from 'devextreme-angular';

import { TextFieldComponent } from '../text-field/text-field.component';
import { PopupComponent } from './popup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxPopupModule,
  ]
})
export class PopupModule { }
