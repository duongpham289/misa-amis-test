import { Injectable } from '@angular/core';


export interface Task {
  TaskID: number,
  TaskName: String,
  TaskStatus: String,
  WorkingStatus: String,
  EndDate: String,
  AssigneeName: String,
}

const tasks: Task[] = [{
  "TaskID":1,
  "TaskName": "Thử nghiệm",
  "TaskStatus": "Chưa hoàn thành",
  "WorkingStatus": "Đang hoạt động",
  "EndDate": "1968-12-08T00:00:00.000Z",
  "AssigneeName": "PHDUONG",
}, {
  "TaskID":2,
  "TaskName": "Thử nghiệm",
  "TaskStatus": "Chưa hoàn thành",
  "WorkingStatus": "Đang hoạt động",
  "EndDate": "1972-02-19T00:00:00.000Z",
  "AssigneeName": "PHDUONG",
}];

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Task[] {
    return tasks;
  }
}