import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import CommonEnum from '../../shared/constants/common';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  defaultPage!: number;
  isPopupOpen!: boolean;
  
  constructor(private url: LocationStrategy) { }

  ngOnInit(): void {
    if (this.url.path() === '/task') {
      this.defaultPage = CommonEnum.DefaultPage;
    }
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
