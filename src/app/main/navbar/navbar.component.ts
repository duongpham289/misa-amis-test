import { Component, Input, OnInit } from '@angular/core';

import { HeaderLinks } from 'src/app/shared/models/header-links';

import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarDropdownIcons, NavbarIcons, NavbarTexts } from 'src/app/shared/resources/navbar-resource';
import { POPUP_ENUMS } from 'src/app/shared/enum/popup-enum';

import popupResources from 'src/app/shared/resources/popup-resources';
import { Department } from 'src/app/shared/models/department';
import { User } from 'src/app/shared/models/user';
import { Task } from 'src/app/shared/models/task';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() userList: User[] = [];
  @Input() userDefault: User[] = [];

  @Input() departmentOptionsForProject: Department[] = [];
  @Input() departmentOptionsForTask: Department[] = [];

  @Input() popupTaskData = <Task>{};

  @Input() currentProject = <Project>{};

  popoverVisible: boolean = false;

  headerLinks: any;

  navbarIcons: iconNavbar[];
  navbarTexts: any;
  navbarDropdownIcons: iconNavbar[];

  popupEnums: any;

  popupVisible: boolean = false;
  popupMemberVisible: boolean = false;


  currentPopupType: number = 0;

  popupWidth: number = 0;
  popupTitle: string = '';
  popupMemberTitle: string = '';
  popupMemberWidth: number = 0;

  currentLink: number = 0;

  selectedMembers: User[] = [];

  editMode: boolean = false;
  emptyTaskData = <Task>{};

  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';

  constructor() {
    this.headerLinks = HeaderLinks;

    this.navbarIcons = NavbarIcons;
    this.navbarTexts = NavbarTexts;
    this.navbarDropdownIcons = NavbarDropdownIcons;

    this.popupEnums = POPUP_ENUMS;
  }

  ngOnInit(): void {
  }

  /**
   * Mở popup thêm công việc
   * CreatedBy: PHDUONG (27/09/2021)
   */
  openPopupTask(editMode: boolean) {
    this.editMode = editMode;
    this.popupVisible = popupResources.Visible;
    this.currentPopupType = POPUP_ENUMS.PopupTask;
    this.popupWidth = POPUP_ENUMS.PopupLarge;
    this.popupTitle = "";
  }

  /**
   * Mở popup thêm member
    * @param open
   * CreatedBy: PHDUONG (27/09/2021)
   */
  openPopupMember(open: boolean) {
    this.popupMemberVisible = open;
    this.popupMemberWidth = POPUP_ENUMS.PopupHuge;
    this.popupMemberTitle = popupResources.PopupMemberTitle;
  }

  /**
   * Phương thức lưu thông tin thành viên vào list
   * CreatedBy: PHDUONG (27/09/2021)
   */
  renderMembersInfo(data: User[]): void {
    this.popupMemberVisible = popupResources.Invisible;
    data.forEach(user => {
      this.userList.push(user);
    });
  }

  /**
    * Mở popup modal tương ứng
    * @param itemId
    * CreatedBy: PHDUONG (27/09/2021)
    */
  openPopup(itemId: number) {
    this.popupVisible = popupResources.Visible;

    this.popoverVisible = popupResources.Invisible;

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
  closePopup() {
    this.userList = Object.assign([], this.userDefault);
    this.popupVisible = popupResources.Invisible;
    this.selectedMembers = [];
  }

  /**
   * Đóng Member popup
   * CreatedBy: PHDUONG(04/10/2021)
   */
  closeMemberPopup() {
    this.popupMemberVisible = popupResources.Invisible;
  }

  /**
   * Hàm mở/đóng Popover 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  toggleDropdown() {
    this.popoverVisible = !this.popoverVisible;
  }

  /**
  * Phương thức style link tương ứng ở từng page
  * @param linkIndex
  * Author: NQMinh (25/09/2021)
  */
  activeLink(linkIndex: number) {
    this.currentLink = linkIndex;
  }

  funcNotAvailable() {
    this.toastMessage = "Chức năng trong giai đoạn phát triển";
    this.type = "custom";
    this.toastVisible = true;
  }
}
