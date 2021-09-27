import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  tasks: Task[] = []
  constructor(service: TaskService) {
    this.tasks = service.getTasks();
   }

  ngOnInit(): void {
  }

}
