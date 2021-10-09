import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectGridComponent } from './project-grid.component';

import { DxDataGridModule, DxTemplateModule, DxToastModule } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { ChartDoughnutModule } from 'src/app/shared/components/base/chart-doughnut/chart-doughnut.module';


@NgModule({
  declarations: [
    ProjectGridComponent
  ],
  imports: [
    CommonModule,
    
    //Component's Module import
    ChartDoughnutModule,

    //Devextreme's Module import
    DxDataGridModule,
    DxiColumnModule,
    DxTemplateModule,
    DxToastModule
  ],
  exports:[
    ProjectGridComponent
  ]
})
export class ProjectGridModule { }
