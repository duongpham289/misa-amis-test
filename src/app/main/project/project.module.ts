import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { NavbarModule } from '../navbar/navbar.module';
import { ProjectGridModule } from './project-grid/project-grid.module';
import { ProjectReportModule } from './project-report/project-report.module';


@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    CommonModule,

    NavbarModule,

    ProjectGridModule,
    ProjectReportModule,
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
