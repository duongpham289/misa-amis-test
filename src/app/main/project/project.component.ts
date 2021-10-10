import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReloadDataService } from 'src/app/data-tranfer/reload-data.service';

import { UserService } from 'src/app/services/user.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

import { PROJECT_PAGES } from 'src/app/shared/enum/project-pages';

import { NavbarComponent } from '../navbar/navbar.component';

import { TaskColumns } from 'src/app/shared/models/task-columns';
import { User } from 'src/app/shared/models/user';
import { Department } from 'src/app/shared/models/department';
import { Project } from 'src/app/shared/models/project';
import { Task } from 'src/app/shared/models/task';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild(NavbarComponent) navbar!: NavbarComponent;

  //region Declare

  userList: User[] = [];
  userDefault: User[] = [];

  departments: Department[] = [];

  departmentOptionsForProjectPopup: Department[] = [];
  departmentOptionsForTaskPopup: Department[] = [];

  tasksData: Task[] = [];

  taskColumns: any;
  projectPages: any;

  currentProjectId: string = '';
  currentProject = <Project>{};
  popupTaskData = <Task>{};

  //endregion

  //region Construcstor
  constructor(public router: Router, private currentRoute: ActivatedRoute, private reloadData: ReloadDataService, private taskService: TaskService, private projectService: ProjectService, private departmentService: DepartmentService, private userService: UserService) {

    this.taskColumns = TaskColumns;
    this.projectPages = PROJECT_PAGES;
  }
  //endregion


  //region Methods

  ngOnInit(): void {

    this.currentRoute.queryParams
      .subscribe(params => {
        this.currentProjectId = params.ProjectId;
      });

    this.getUserData();
    this.getDepartmentData();
    this.getProjectData();
    this.getTaskData();

    this.reloadData.reloadTask.subscribe(() => { this.getTaskData() });
  }

  /**
   * Lấy dữ liệu Người dùng
   * CreatedBy: PHDUONG(08/10/2021)
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
   * Lấy dữ liệu Phòng ban
   * CreatedBy: PHDUONG(08/10/2021)
   */
  getDepartmentData() {
    if (this.departmentService.departments.length <= 0) {
      this.departmentService.getDepartmentByUserId(this.userService.userId).subscribe(departments => {
        this.departmentService.departments = departments

        this.departments = Object.assign([], this.departmentService.departments);

        this.departmentOptionsForTaskPopup = Object.assign([], this.departmentService.departments);

        departments.forEach(department => {
          if (department.IsBelongToCurrentUser) {
            this.departmentService.departmentOptionsForProjectPopup.push(department);
          }
        });
        this.departmentOptionsForProjectPopup = Object.assign([], this.departmentService.departmentOptionsForProjectPopup);
      });
    } else {
      this.departments = Object.assign([], this.departmentService.departments);
      this.departmentOptionsForTaskPopup = Object.assign([], this.departmentService.departments);
      this.departmentOptionsForProjectPopup = Object.assign([], this.departmentService.departmentOptionsForProjectPopup);
    }
  }

  /**
   * Lấy dữ liệu Dự án
   * CreatedBy: PHDUONG(08/10/2021)
   */
  getProjectData() {
    this.projectService.getById(this.currentProjectId).subscribe(project => {
      this.currentProject = project;
    });

  }

  /**
   * Lấy dữ liệu Công việc
   * CreatedBy: PHDUONG(08/10/2021)
   */
  getTaskData() {
    this.taskService.getTasksByProjectId(this.currentProjectId).subscribe(tasks => {
      this.tasksData = tasks;
    });
  }

  /**
   * Mở popup sửa công việc
   * CreatedBy: PHDUONG(08/10/2021)
   */
  openTaskEdit(data: any) {
    this.popupTaskData = data.data;
    this.navbar.openPopupTask(true);
  }

  /**
   * Load lại dữ liệu trang Project
   * CreatedBy: PHDUONG(08/10/2021)
   */
  reloadProjectData() {
    setTimeout(() => {
      this.currentRoute.queryParams
        .subscribe(params => {
          this.currentProjectId = params.ProjectId;
        });

      this.projectService.getById(this.currentProjectId).subscribe(project => {
        this.currentProject = project;
      });

      this.getTaskData();
    }, 1000);
  }

  //endregion

}
