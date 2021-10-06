export class MemberColumn {
  //Id của cột
  ColID: number;

  //Trường tham chiếu với dữ liệu trả về
  ColField: string;

  //Tên cột hiển thị
  ColName: string;

  constructor(ColID: number, ColField: string, ColName: string) {
    this.ColID = ColID;
    this.ColField = ColField;
    this.ColName = ColName;
  }
}

export const MemberColumns: MemberColumn[] = [
  {
    ColID: 1,
    ColField: 'FullName',
    ColName: 'Họ và tên',
  },
  {
    ColID: 2,
    ColField: 'JobPositionName',
    ColName: 'Vị trí công việc',
  },
  {
    ColID: 3,
    ColField: 'Email',
    ColName: 'Email',
  },
  {
    ColID: 4,
    ColField: 'OrganizationUnitName',
    ColName: 'Đơn vị công tác',
  }
]
