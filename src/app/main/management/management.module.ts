import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';

import { ManagementComponent } from './management.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PopupModule } from '../../../app/shared/components/popup/popup.module';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    DashboardModule
  ],
  exports:[
    ManagementComponent
  ]
})
export class ManagementModule { }
