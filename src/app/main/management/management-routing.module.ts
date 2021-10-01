import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectComponent } from '../project/project.component';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '', component: ManagementComponent, children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'project', component: ProjectComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
