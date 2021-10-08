export class User {
    UserId: string;
    FullName: string;
    EmployeeCode: string;
    Mobile: string;
    Email: string;
    Avatar: string;
    AvatarColor: string;

    constructor(UserId: string, Avatar: any, EmployeeCode: string, AvatarColor: string, Email: string, FullName: string, IsEditPermission: number, JobPositionName: string, MISAIDEmail: string, MisaCode: string, Mobile: string, ModifiedDate: string, OrganizationUnitID: string, OrganizationUnitName: string, RoleCode: string, RoleName: string, Status: number, TenantID: string, UserID: string) {
        
        this.UserId = UserId;
        this.FullName = FullName;
        this.Email = Email;
        this.EmployeeCode = EmployeeCode;
        this.Avatar = Avatar;
        this.AvatarColor = AvatarColor;
        this.Mobile = Mobile;
    }
}