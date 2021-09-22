import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PopupModule } from 'src/app/shared/components/popup/popup.module';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PopupModule
  ]
})
export class DashboardModule { }
