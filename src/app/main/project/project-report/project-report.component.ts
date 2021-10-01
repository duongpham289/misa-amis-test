import { Component, OnInit } from '@angular/core';
import { REPORT_CONSTANTS } from 'src/app/shared/constants/report';
import { ReportService } from 'src/app/shared/services/report-service';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.scss']
})
export class ProjectReportComponent implements OnInit {
  reportData: any;
  reportConst: any;

  constructor(private _reportService: ReportService) {
    this.reportData = _reportService.getReportData();
    this.reportConst = REPORT_CONSTANTS;
  }
  ngOnInit(): void {
  }

}
