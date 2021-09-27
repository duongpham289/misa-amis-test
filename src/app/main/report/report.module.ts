import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    ReportComponent
  ]
})
export class ReportModule { }
