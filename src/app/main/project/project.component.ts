import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from 'src/app/services/task.service';
import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarIcons } from "../../shared/resources/navbar-resource";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // navbarIcons: iconNavbar[];
  tasks: Task[] = []
  constructor(service: TaskService) {
    // this.navbarIcons = NavbarIcons;
    this.tasks = service.getTasks();
   }

  ngOnInit(): void {
  }

}
