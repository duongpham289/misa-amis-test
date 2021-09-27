import { Component, OnInit} from '@angular/core';

import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarDropdownIcons, NavbarIcons } from 'src/app/shared/resources/navbar-resource';

import popupResources from 'src/app/shared/resources/popup-resources';
import { POPUP_ENUMS } from 'src/app/shared/enum/popup-enum';
import { PopupService } from 'src/app/shared/services/popup-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownVisible: boolean = false;

  navbarIcons: iconNavbar[];

  dropdownIcons: iconNavbar[];

  popupEnums: any;
  
  isPopupOpen: boolean = false;

  currentPopupType: number = 0;

  popupWidth: number = 0;

  popupTitle: string = '';

  constructor(private _popupService: PopupService) { 
    this.navbarIcons = NavbarIcons;
    this.dropdownIcons = NavbarDropdownIcons;
    this.popupEnums = POPUP_ENUMS;
    
   }

  ngOnInit(): void {
    this._popupService.popupVisible$.subscribe(popupVisible => {
      this.isPopupOpen = popupVisible;
    });
  }
  
  /**
   * Phương thức call service để popup thêm công việc
   * CreatedBy: PHDUONG (27/09/2021)
   */
   addTask() {
    this.isPopupOpen = true;
    this.currentPopupType = POPUP_ENUMS.PopupTask;
    this.popupWidth = POPUP_ENUMS.PopupLarge;
  }

 /**
   * Phương thức call service để mở popup modal tương ứng
   * @param itemId
   * CreatedBy: PHDUONG (27/09/2021)
   */
  addFunction(itemId: number) {
    this.isPopupOpen = true;

    this.dropdownVisible = false;

    this.currentPopupType = itemId;
    if (this.currentPopupType === POPUP_ENUMS.PopupDepartment) {
      this.popupTitle = popupResources.PopupDepartmentTitle;
      this.popupWidth = POPUP_ENUMS.PopupMedium;
    }
    else if (this.currentPopupType === POPUP_ENUMS.PopupProject) {
      this.popupWidth = POPUP_ENUMS.PopupBig;
      this.popupTitle = popupResources.PopupProjectTitle;
    }
  }

  /**
   * Hàm mở/đóng dropdown 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
