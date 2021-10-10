import { Component, Input, OnInit } from '@angular/core';

import { REPORT_CONSTANTS } from 'src/app/shared/constants/report';
import { ReportTask } from 'src/app/shared/models/report';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.scss']
})
export class ProjectReportComponent implements OnInit {

  //region Declare
  @Input() tasksData: Task[] = [];

  reportData: ReportTask[] = [];

  reportConst: any;
  //endregion

  //region Constructor
  constructor() {
    this.reportConst = REPORT_CONSTANTS;
  }
  //endregion

  //regionMethods

  ngOnInit(): void {
    var listOfAssigneeId = this.tasksData.map(item => item.AssigneeId)
      .filter((value, index, self) => self.indexOf(value) === index)

    listOfAssigneeId.forEach(AssigneeId => {
      var report = new ReportTask()
      this.tasksData.forEach(task => {
        if (task.AssigneeId == AssigneeId) {
          report.AssigneeId = task.AssigneeId;
          report.AssigneeName = task.AssigneeName;
          if (task.Process < 100) {
            report.UnFinished++;
          } else report.Finished++;
          report.TotalTask++;
        }
      });

      this.reportData.push(report);
    });
  }

  customizeText(arg: any) {
    if (arg.valueText == 0) {
      return;
    } else {

      return arg.valueText;
    }
  }
  //endregion

}
