import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';

import { ManagementComponent } from './management.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { PopupModule } from 'src/app/shared/components/base/popup/popup.module';
import { ProjectModule } from '../project/project.module';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ManagementRoutingModule,

    //components import
    DashboardModule,
    PopupModule,
    ProjectModule,
  ],
  exports: [
    ManagementComponent
  ]
})
export class ManagementModule { }
