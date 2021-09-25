import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { NavbarModule } from '../navbar/navbar.module';

import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    
    DxDataGridModule,
    DxiColumnModule,
    DxTemplateModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
