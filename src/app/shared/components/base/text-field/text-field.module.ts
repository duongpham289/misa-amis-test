import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { TextFieldComponent } from './text-field.component';



@NgModule({
  declarations: [
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule
  ],
  exports:[
    TextFieldComponent
  ]
})
export class TextFieldModule { }
