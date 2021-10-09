import { Component, OnInit } from '@angular/core';

import { ReloadDataService } from 'src/app/data-tranfer/reload-data.service';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

import { Department } from 'src/app/shared/models/department';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList: User[] = [];
  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";

  departments: Department[] = [];

  departmentOptionsForProject: Department[] = [];
  departmentOptionsForTask: Department[] = [];
  userDefault: User[] = [];

  constructor(private reloadData: ReloadDataService, private departmentService: DepartmentService, private userService: UserService) { }

  /**
   * Lấy dữ liệu qua service 
   * CreatedBY: PHDUONG(07/10/2021)
   */
  ngOnInit(): void {

    this.userService.getUserById(this.userId).subscribe(users => {
      this.userList.push(users);
      this.userDefault.push(users);
    });

    this.getDepartmentsData();

    this.reloadData.reloadDepartment.subscribe(() => { this.getDepartmentsData() });
  }

  getDepartmentsData() {
    this.departmentService.getDepartmentByUserId(this.userId).subscribe(departments => {
      this.departments = departments;

      this.departmentOptionsForTask = this.departments;
      this.departmentOptionsForProject = Array<Department>();
      this.departments.forEach(department => {
        if (department.IsBelongToCurrentUser) {
          this.departmentOptionsForProject.push(department);
        }
      });
    });
  }

}
