export class ProjectUser {
    ProjectId: string;
    ListUserId: Array<string>;

    constructor(ProjectId: string, ListUserId: any) {

        this.ProjectId = ProjectId;
        this.ListUserId = ListUserId;
    }
}