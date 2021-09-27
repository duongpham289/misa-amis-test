import { Component, OnInit } from '@angular/core';
import { REPORT_CONSTANTS } from 'src/app/shared/constants/report';
import { ReportService } from 'src/app/shared/services/report-service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportData: any;
  reportConst: any;

  constructor(private _reportService: ReportService) {
    this.reportData = _reportService.getReportData();
    this.reportConst = REPORT_CONSTANTS;
  }
  ngOnInit(): void {
  }

}
