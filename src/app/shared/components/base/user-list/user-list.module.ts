import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { DxScrollViewModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule, DxScrollViewModule
  ],
  exports: [
    UserListComponent
  ],
})
export class UserListModule { }
