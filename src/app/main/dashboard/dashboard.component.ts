import { Component, OnInit } from '@angular/core';
import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarIcons } from "../../shared/resources/navbar-resource";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isPopupOpen!: boolean;

  // navbarIcons: iconNavbar[];
  constructor() {
    // this.navbarIcons = NavbarIcons;
  }

  ngOnInit(): void {
  }

  /**
     * Mở popup 
     * @param open 
     * CreatedBy: PHDUONG(23/09/2021)
     */
  openPopup(open: boolean) {
    this.isPopupOpen = open;
  }

  /**
   * Đóng popup 
   * @param close 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  closePopup(close: boolean) {
    this.isPopupOpen = close;
  }

}
