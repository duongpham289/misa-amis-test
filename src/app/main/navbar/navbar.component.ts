import { Component, OnInit } from '@angular/core';

import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarDropdownIcons, NavbarIcons, NavbarTexts } from 'src/app/shared/resources/navbar-resource';

import popupResources from 'src/app/shared/resources/popup-resources';
import { POPUP_ENUMS } from 'src/app/shared/enum/popup-enum';
import { PopupService } from 'src/app/shared/services/popup-service';
import { HeaderLinks } from 'src/app/shared/models/header-links';

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

  popupVisible: boolean = false;
  popupMemberVisible: boolean = false;
  
  currentPopupType: number = 0;

  popupWidth: number = 0;
  popupTitle: string = '';
  popupMemberTitle: string = '';
  popupMemberWidth: number = 0;
  
  navbarTexts: any;
  headerLinks: any;
  currentLink: number = 0;



  constructor(private _popupService: PopupService) {
    this.headerLinks = HeaderLinks;
    this.navbarIcons = NavbarIcons;
    this.navbarTexts = NavbarTexts;
    this.dropdownIcons = NavbarDropdownIcons;
    this.popupEnums = POPUP_ENUMS;

  }

  ngOnInit(): void {
    // this._popupService.popupVisible$.subscribe(popupVisible => {
    //   this.popupVisible = popupVisible;
    // });
  }

  /**
   * Phương thức call service để popup thêm công việc
   * CreatedBy: PHDUONG (27/09/2021)
   */
  openPopupTask() {
    this.popupVisible = true;
    this.currentPopupType = POPUP_ENUMS.PopupTask;
    this.popupWidth = POPUP_ENUMS.PopupLarge;
    this.popupTitle = "";
  }

  /**
   * Phương thức call service để popup thêm công việc
   * CreatedBy: PHDUONG (27/09/2021)
   */
   openPopupMember(open: boolean) {
    this.popupMemberVisible = open;
    this.popupMemberWidth = POPUP_ENUMS.PopupHuge;
    this.popupMemberTitle = popupResources.PopupMemberTitle;
  }

  /**
    * Phương thức call service để mở popup modal tương ứng
    * @param itemId
    * CreatedBy: PHDUONG (27/09/2021)
    */
  openPopup(itemId: number) {
    this.popupVisible = true;

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
   * Đóng popup
   * CreatedBy: PHDUONG(04/10/2021)
   */
  closePopup(){
    this.popupVisible = false;
  }

  /**
   * Đóng popup
   * CreatedBy: PHDUONG(04/10/2021)
   */
  closeMemberPopup(){
    this.popupMemberVisible = false;
  }

  /**
   * Hàm mở/đóng dropdown 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  
  /**
  * Phương thức style link tương ứng ở từng page
  * @param linkIndex
  * Author: NQMinh (25/09/2021)
  */
 activeLink(linkIndex: number) {
   this.currentLink = linkIndex;
 }
}
