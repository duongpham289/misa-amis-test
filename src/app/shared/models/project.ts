export class Project {
    ProjectId: any;
    ProjectName: string;
    Description: string;
    DepartmentId: any;
    DepartmentName: any;
    StartDate: Date;
    EndDate: Date;
    Icon: string;
    IconColor: string;
  
    constructor(ProjectId: any = null, ProjectName: string = '', Description: string = '', DepartmentId: any = null, StartDate: Date = new Date(),EndDate: Date= new Date(), Icon: string = '', IconColor: string = '') {
      this.ProjectId = ProjectId;
      this.ProjectName = ProjectName;
      this.Description = Description;
      this.DepartmentId = DepartmentId;
      this.StartDate = StartDate;
      this.EndDate = EndDate;
      this.Icon = Icon;
      this.IconColor = IconColor;
    }
  }