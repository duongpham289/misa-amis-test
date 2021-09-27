import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { DxButtonModule } from 'devextreme-angular';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    DxButtonModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
