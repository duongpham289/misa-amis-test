import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  fakeData = [
    {
      AssigneeID: "9523f3e0-6f54-43ca-b0eb-76ec10979e29",
      AssigneeName: "Phạm Văn đồng",
      FinishDate: 1,
      TotalTask: 3,
      UnFinishDate: 2
    },
    {
      AssigneeID: "5f8b04d9-74e0-4749-9d26-96adf25ac493",
      AssigneeName: "Đỗ Quang Thắng",
      FinishDate: 0,
      TotalTask: 2,
      UnFinishDate: 2
    }
  ]

  constructor() { }

  getReportData() {
    return this.fakeData;
  }
}