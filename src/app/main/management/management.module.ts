import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';

import { ManagementComponent } from './management.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { PopupModule } from 'src/app/shared/components/popup/popup.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { DxListModule, DxPopoverModule, DxTemplateModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    ManagementComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    DashboardModule,
    RouterModule,
    PopupModule,
    DxPopoverModule,
    DxTemplateModule,
    DxListModule
  ],
  exports:[
    ManagementComponent
  ]
})
export class ManagementModule { }
