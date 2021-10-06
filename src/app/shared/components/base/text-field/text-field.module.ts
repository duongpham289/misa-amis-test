import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxListModule, DxPopoverModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { TextFieldComponent } from './text-field.component';



@NgModule({
  declarations: [
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxPopoverModule,
    DxListModule,
  ],
  exports:[
    TextFieldComponent
  ]
})
export class TextFieldModule { }
