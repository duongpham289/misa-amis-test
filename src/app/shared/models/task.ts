export class Task {
  TaskId: string;
  TaskName: string;
  Process: number;
  EndDate: Date;
  AssigneeId: string;
  AssigneeName: string;
  AssigneeEmail: string;
  AssigneeAvatar: string;
  AssigneeAvatarColor: string;
  AssignerName: string;
  ProjectId: string;
  ProjectName: string;

  constructor(TaskId: string = '', TaskName: string = '', Process: number = 0, EndDate: Date, AssigneeId: string = '', AssigneeName: string = '', AssigneeEmail: string = '', AssigneeAvatar: string = '', AssigneeAvatarColor: string = '', AssignerName: string = '', ProjectId: string = '', ProjectName: string = '') {
    this.TaskId = TaskId;
    this.TaskName = TaskName;
    this.Process = Process;
    this.EndDate = EndDate;
    this.AssigneeId = AssigneeId;
    this.AssigneeName = AssigneeName;
    this.AssigneeEmail = AssigneeEmail;
    this.EndDate = EndDate;
    this.AssigneeAvatar = AssigneeAvatar;
    this.AssigneeAvatarColor = AssigneeAvatarColor;
    this.AssignerName = AssignerName;
    this.ProjectId = ProjectId;
    this.ProjectName = ProjectName;
  }
}