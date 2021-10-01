import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectGridComponent } from './project-grid.component';

import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { ChartDoughnutModule } from 'src/app/shared/components/base/chart-doughnut/chart-doughnut.module';


@NgModule({
  declarations: [
    ProjectGridComponent
  ],
  imports: [
    CommonModule,
    
    
    ChartDoughnutModule,
    DxDataGridModule,
    DxiColumnModule,
    DxTemplateModule
  ],
  exports:[
    ProjectGridComponent
  ]
})
export class ProjectGridModule { }
