import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SidebarModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
