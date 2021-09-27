import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { NavbarModule } from '../navbar/navbar.module';
import { DxChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    DxChartModule
  ],
  exports: [
    ReportComponent
  ]
})
export class ReportModule { }
