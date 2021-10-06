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
  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0"

  constructor(private service: DepartmentService) {
    this.mainMenuItems = MENU_ITEMS;
  }


  ngOnInit(): void {
    this.getDepartments();
  }

  click() :void{
    console.log(this.departments);
    
  }

  getDepartments(): void {
    this.service.getDepartmentByUserId(this.userId).subscribe(departments => this.departments = departments);
  }
}
