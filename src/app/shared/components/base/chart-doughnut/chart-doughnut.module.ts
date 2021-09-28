import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPieChartModule } from 'devextreme-angular';
import { ChartDoughnutComponent } from './chart-doughnut.component';



@NgModule({
  declarations: [ChartDoughnutComponent],
  imports: [
    CommonModule,
    DxPieChartModule
  ],
  exports: [ChartDoughnutComponent]
})
export class ChartDoughnutModule { }
