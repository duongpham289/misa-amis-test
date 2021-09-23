import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './main/management/management.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  { path: 'task', component: ManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
