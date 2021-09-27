import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';

import { ManagementComponent } from './management.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { ProjectModule } from '../project/project.module';
import { ReportModule } from '../report/report.module';



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
    ProjectModule,
    ReportModule,
  ],
  exports: [
    ManagementComponent
  ]
})
export class ManagementModule { }
