import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { PROJECT_PAGES } from 'src/app/shared/enum/project-pages';
import { Department } from 'src/app/shared/models/department';
import { TaskColumns } from 'src/app/shared/models/task-columns';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  
  userList: User[] = [];
  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";

  departments: Department[] = [];

  departmentOptionsForProject: Department[] = [];
  departmentOptionsForTask: Department[] = [];
  
  tasksData: any;
  taskColumns: any;
  projectPages: any;
  currentProject: any;
  

  constructor(public router: Router, private currentRoute: ActivatedRoute, private taskService: TaskService,private service: DepartmentService, private userService: UserService) {
    
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
        this.currentProject = params.ProjectId;
      }
    );
    
    this.taskService.getTasks(this.currentProject).subscribe(tasks => this.tasksData = tasks);

    this.userService.getUserById(this.userId).subscribe(users => this.userList.push(users));

    this.service.getDepartmentByUserId(this.userId).subscribe(departments => {
      this.departments = departments; 
      
      this.departmentOptionsForTask = this.departments;
      this.departments.forEach(department => {
        if (department.IsBelongToCurrentUser) {
          this.departmentOptionsForProject.push(department);
        }
      });
    });
  }

}
