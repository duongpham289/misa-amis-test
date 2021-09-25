import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { PopupProjectModule } from 'src/app/shared/components/views/project/popup-project/popup-project.module';
import { PopupDepartmentModule } from 'src/app/shared/components/views/department/popup-department/popup-department.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PopupDepartmentModule,
    NavbarModule,
    SidebarModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
