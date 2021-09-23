import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PopupModule } from 'src/app/shared/components/popup/popup.module';
import { RouterModule } from '@angular/router';

import {
  DxPopoverModule,
  DxTemplateModule,
  DxListModule
} from 'devextreme-angular';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PopupModule,
    RouterModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
