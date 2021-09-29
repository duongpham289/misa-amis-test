import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupProjectComponent } from './popup-project.component';
import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { ButtonModule } from '../../../base/button/button.module';
import { DxPopupModule } from 'devextreme-angular';



@NgModule({
  declarations: [PopupProjectComponent],
  imports: [
    CommonModule,
    
    TextFieldModule,
    ButtonModule,
    DxPopupModule,
  ],
  exports: [PopupProjectComponent]
})
export class PopupProjectModule { }
