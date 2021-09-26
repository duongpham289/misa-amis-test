import { Component, OnInit } from '@angular/core';
import { Department, DepartmentService } from 'src/app/services/department.service';

import { MENU_ITEMS } from '../../shared/constants/menu'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  departments: Department[] = []
  isTaskOpen: boolean = false;
  departmentToOpen!: any;
  constructor(service: DepartmentService) {
    this.departments = service.getDepartments();
  }
  mainMenuItems = MENU_ITEMS;


  openTask(item: any) {
    console.log(item);
    
  }

  ngOnInit(): void {
  }

}
