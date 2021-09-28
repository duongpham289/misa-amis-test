export class TaskColumn {
  //Id của cột
  ColID: number;

  //Trường tham chiếu với dữ liệu trả về
  ColField: string;

  //Tên cột hiển thị
  ColName: string;

  //Độ rộng mặc định của cột
  ColWidth: number;

  //Kiểu dữ liệu trong cột
  ColDataType: string;

  //Định dạng kiểu dữ liệu trong cột
  ColFormat: string;

  //Customize giao diện và chức năng của các ô trong cột
  CellTemplate: string;

  constructor(ColID: number, ColField: string, ColName: string, ColWidth: number, ColDataType: string, ColFormat: string, CellTemplate: string) {
    this.ColID = ColID;
    this.ColField = ColField;
    this.ColName = ColName;
    this.ColWidth = ColWidth;
    this.ColDataType = ColDataType;
    this.ColFormat = ColFormat;
    this.CellTemplate = CellTemplate;
  }
}

export const TaskColumns: TaskColumn[] = [
  {
    ColID: 1,
    ColField: 'TaskName',
    ColName: 'Tên công việc',
    ColWidth: 635,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "popupModalCellTemplate"
  },
  {
    ColID: 2,
    ColField: 'Process',
    ColName: 'Tình trạng công việc',
    ColWidth: 376,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "donutChartCellTemplate"
  },
  {
    ColID: 3,
    ColField: 'TaskStatus',
    ColName: 'Trạng thái hoạt động',
    ColWidth: 250,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "normalCellTemplate"
  },
  {
    ColID: 4,
    ColField: 'EndDate',
    ColName: 'Hạn hoàn thành',
    ColWidth: 250,
    ColDataType: "date",
    ColFormat: "dd/MM/yyyy",
    CellTemplate: "dateCellTemplate"
  },
  {
    ColID: 5,
    ColField: 'AssigneeName',
    ColName: 'Người thực hiện',
    ColWidth: 265,
    ColDataType: "",
    ColFormat: "",
    CellTemplate: "normalCellTemplate"
  }
];
