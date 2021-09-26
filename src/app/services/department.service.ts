import { Injectable } from '@angular/core';


export interface Department {
  id: string;
  text: string;
  items?: Project[];
}
export interface Project {
  id: string;
  text: string;
}

const departments: Department[] = [{
  id: "1",
  text: "Cá nhân",
  items: [{
    id: "1_1",
    text: "Công việc cá nhân",
  }]
}, {
  id: "2",
  text: "Demo",
  items: [{
    id: "2_1",
    text: "Test",
  }]
}];

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  getDepartments(): Department[] {
    return departments;
  }
}