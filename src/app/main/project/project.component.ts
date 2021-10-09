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


  userList: User[] = [];
  userDefault: User[] = [];

  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";

  departments: Department[] = [];

  departmentOptionsForProject: Department[] = [];
  departmentOptionsForTask: Department[] = [];

  tasksData: Task[] = [];

  taskColumns: any;
  projectPages: any;

  currentProjectId: string = '';
  currentProject = <Project>{};
  popupTaskData = <Task>{};


  constructor(public router: Router, private currentRoute: ActivatedRoute, private reloadData: ReloadDataService, private taskService: TaskService, private projectService: ProjectService, private service: DepartmentService, private userService: UserService) {

    this.taskColumns = TaskColumns;
    this.projectPages = PROJECT_PAGES;
  }

  /**
   * Lấy dữ liệu qua service 
   * CreatedBY: PHDUONG(07/10/2021)
   */
  ngOnInit(): void {


    this.currentRoute.queryParams
      .subscribe(params => {
        this.currentProjectId = params.ProjectId;
      });
      
    this.projectService.getById(this.currentProjectId).subscribe(project => {
      this.currentProject = project;

    });

    this.userService.getUserById(this.userId).subscribe(users => {
      this.userList.push(users);
      this.userDefault.push(users);
    });

    this.service.getDepartmentByUserId(this.userId).subscribe(departments => {
      this.departments = departments;

      this.departmentOptionsForTask = this.departments;
      this.departments.forEach(department => {
        if (department.IsBelongToCurrentUser) {
          this.departmentOptionsForProject.push(department);
        }
      });
    });

    this.getTaskData();

    this.reloadData.reloadTask.subscribe(() => { this.getTaskData() });
  }

  getTaskData() {
    this.taskService.getTasks(this.currentProjectId).subscribe(tasks => {
      this.tasksData = tasks;
    });

  }

  openTaskEdit(data: any) {
    console.log(data.data);
    
    this.popupTaskData = data.data;
    this.navbar.openPopupTask(true);
  }

}
