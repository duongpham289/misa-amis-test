export class DepartmentUser {
    DepartmentId: string;
    ListUserId: Array<string>;

    constructor(DepartmentId: string, ListUserId: any) {

        this.DepartmentId = DepartmentId;
        this.ListUserId = ListUserId;
    }
}