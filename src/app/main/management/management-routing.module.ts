import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectComponent } from '../project/project.component';

const routes: Routes = [
  
  { path: 'task/dashboard', component: DashboardComponent },
  { path: 'task/project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
