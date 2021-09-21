import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  mainMenuItems = [
    {
      icon: "icon-home-active",
      text: "Tổng quan",
    },
    {
      icon: "icon-task-active",
      text: "Việc của tôi",
    },
    {
      icon: "icon-report-active",
      text: "Báo cáo",
    }
  ]

  ngOnInit(): void {
  }

}
