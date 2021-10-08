import { Project } from "./project";

export class Department {
    DepartmentId: any;
    DepartmentName: string;
    ListProjects: Project[];
    IsBelongToCurrentUser: number;
    UserId: any

    constructor(DepartmentId: any = null, DepartmentName: string = '', ListProjects: Project[] = [], IsBelongToCurrentUser: number = 1, UserId: any = null) {
        this.DepartmentId = DepartmentId;
        this.DepartmentName = DepartmentName;
        this.ListProjects = ListProjects;
        this.IsBelongToCurrentUser = IsBelongToCurrentUser;
        this.UserId = UserId;
    }
}
