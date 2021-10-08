import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { DxTextBoxModule, DxTreeViewModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    //Devextreme's Module import
    DxTextBoxModule,
    DxTreeViewModule,
    DxiItemModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
