import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent implements OnInit {

  //region Declare

  fakeData: any[] = []
  data: any[] = [];
  @Input() doughnutSize: any;
  @Input() doughnutData: any;
  
  //endregion

  //region Constructor
  constructor() {
    setTimeout(() => {
      this.data = this.doughnutData;
    }, 300)
  }
  //endregion

  ngOnInit(): void { }

}
