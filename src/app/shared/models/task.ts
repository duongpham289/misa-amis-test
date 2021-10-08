export class Task {
  TaskId: string;
  TaskName: string;
  Process: number;
  EndDate: Date;
  AssigneeId: string;
  AssigneeName: string;
  AssigneeEmail: string;
  ProjectId: string;

  constructor(TaskId: string = '', TaskName: string = '', Process: number = 0,EndDate: Date,AssigneeId: string='',AssigneeName: string='',AssigneeEmail: string='',ProjectId: string='') {
    this.TaskId = TaskId;
    this.TaskName = TaskName;
    this.Process = Process;
    this.EndDate = EndDate;
    this.AssigneeId = AssigneeId;
    this.AssigneeName = AssigneeName;
    this.AssigneeEmail = AssigneeEmail;
    this.ProjectId = ProjectId;
  }
}