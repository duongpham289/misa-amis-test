import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DxListModule, DxPopoverModule, DxTemplateModule } from 'devextreme-angular';

import { NavbarComponent } from './navbar.component';

import { PopupModule } from 'src/app/shared/components/base/popup/popup.module';
import { PopupDepartmentModule } from 'src/app/shared/components/views/department/popup-department/popup-department.module';
import { PopupProjectModule } from 'src/app/shared/components/views/project/popup-project/popup-project.module';
import { PopupTaskModule } from 'src/app/shared/components/views/task/popup-task/popup-task.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    PopupModule,
    PopupDepartmentModule,
    PopupProjectModule,
    PopupTaskModule,

    DxPopoverModule,
    DxListModule,
    DxTemplateModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
