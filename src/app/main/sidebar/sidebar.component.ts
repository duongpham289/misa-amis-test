import { Component, OnInit } from '@angular/core';
import { Department, DepartmentService } from 'src/app/services/department.service';

import { MENU_ITEMS } from '../../shared/resources/menu-resources'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  departments: Department[] = []
  mainMenuItems!: any

  constructor(service: DepartmentService) {
    this.departments = service.getDepartments();
    this.mainMenuItems = MENU_ITEMS;
  }


  ngOnInit(): void {
  }

}
