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

  //region Declare

  userList: User[] = [];
  userDefault: User[] = [];

  departments: Department[] = [];

  departmentOptionsForProjectPopup: Department[] = [];

  departmentOptionsForTaskPopup: Department[] = [];


  //endregion

  //region Constructor
  constructor(private reloadData: ReloadDataService, private departmentService: DepartmentService, private userService: UserService) { }
  //endregion

  //region Methods

  ngOnInit(): void {


    this.getUserData();
    this.getDepartmentData();

    this.reloadData.reloadDepartment.subscribe(() => { this.updateDepartment() });
  }
  /**
   * Lấy dữ liệu người dùng
   * CreatedBY: PHDUONG(07/10/2021)
   */
  getUserData() {
    if (!this.userService.currentUser.UserId) {
      this.userService.getUserById(this.userService.userId).subscribe(user => {
        this.userService.currentUser = user
        this.userList.push(this.userService.currentUser);
        this.userDefault.push(this.userService.currentUser);
      });
    } else {
      this.userList.push(this.userService.currentUser);
      this.userDefault.push(this.userService.currentUser);
    }
  }

  /**
   * Lấy dữ liệu phòng ban
   * CreatedBY: PHDUONG(07/10/2021)
   */
  getDepartmentData() {
    if (this.departmentService.departments.length <= 0) {
      this.updateDepartment();
    } else {
      this.departments = Object.assign([], this.departmentService.departments);
      this.departmentOptionsForTaskPopup = Object.assign([], this.departmentService.departments);
      this.departmentOptionsForProjectPopup = Object.assign([], this.departmentService.departmentOptionsForProjectPopup);
    }
  }

  updateDepartment() {
    this.departmentService.getDepartmentByUserId(this.userService.userId).subscribe(departments => {
      this.departmentService.departments = departments

      this.departments = Object.assign([], this.departmentService.departments);

      this.departmentOptionsForTaskPopup = Object.assign([], this.departmentService.departments);

      this.departmentService.departmentOptionsForProjectPopup = [] as Department[];
      this.departmentService.departments.forEach(department => {
        if (department.IsBelongToCurrentUser) {
          this.departmentService.departmentOptionsForProjectPopup.push(department);
        }
      });
      this.departmentOptionsForProjectPopup = Object.assign([], this.departmentService.departmentOptionsForProjectPopup);
    });
  }

  //endregion

}
