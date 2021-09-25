import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxListModule, DxPopoverModule, DxTemplateModule } from 'devextreme-angular';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    DxPopoverModule,
    DxListModule,
    DxTemplateModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
