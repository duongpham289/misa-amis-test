import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { PROJECT_PAGES } from 'src/app/shared/enum/project-pages';
import { TaskColumns } from 'src/app/shared/models/task-columns';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  tasksData: any;
  taskColumns: any;
  projectPages: any;
  currentProject: any;
  

  constructor(public router: Router, private currentRoute: ActivatedRoute, private taskService: TaskService) {
    
    this.taskColumns = TaskColumns;
    this.projectPages = PROJECT_PAGES;
  }

  ngOnInit(): void {
    this.currentRoute.queryParams
      .subscribe(params => {
        this.currentProject = params.ProjectId;
      }
    );
    
    this.taskService.getTasks(this.currentProject).subscribe(tasks => this.tasksData = tasks);
  }

}
