import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DxPopupModule,
} from 'devextreme-angular';

import { PopupComponent } from './popup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxPopupModule,
  ],
  exports: [
    PopupComponent
  ]
})
export class PopupModule { }
