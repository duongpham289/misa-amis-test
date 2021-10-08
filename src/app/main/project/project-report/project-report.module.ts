import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectReportComponent } from './project-report.component';
import { DxChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [ProjectReportComponent],
  imports: [
    CommonModule,
    
    //Devextreme's Module import
    DxChartModule
  ],
  exports: [ProjectReportComponent]
})
export class ProjectReportModule { }
