import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isPopupOpen!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(open: boolean){
    this.isPopupOpen = open;
  }
  
  closePopup(close: boolean){
    this.isPopupOpen = close;
  }

}
