import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { HeaderLinks } from 'src/app/shared/models/header-links';

import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarDropdownIcons, NavbarIcons, NavbarTexts } from 'src/app/shared/resources/navbar-resource';
import { POPUP_ENUMS } from 'src/app/shared/enum/popup-enum';

import popupResources from 'src/app/shared/resources/popup-resources';
import { Department } from 'src/app/shared/models/department';
import { User } from 'src/app/shared/models/user';
import { Task } from 'src/app/shared/models/task';
import { Project } from 'src/app/shared/models/project';
import { POPUP_TASK_RESOURCES } from 'src/app/shared/resources/popup-task-resources';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //region Declare

  @Input() userList: User[] = [];
  @Input() userDefault: User[] = [];

  @Input() departmentOptionsForProject: Department[] = [];
  @Input() departmentOptionsForTask: Department[] = [];

  @Input() popupTaskData = <Task>{};

  @Input() currentProject = <Project>{};

  @Output() reloadProjectData = new EventEmitter<string>();

  popoverVisible: boolean = false;

  headerLinks: any;

  navbarIcons: iconNavbar[];
  navbarTexts: any;
  navbarDropdownIcons: iconNavbar[];

  popupEnums: any;

  popupVisible: boolean = false;
  popupMemberVisible: boolean = false;

  projectId: string = '16c9b8e7-29bb-11ec-a25d-b8ca3abd234e';
  departmentId: string = '1b6e67e6-29b1-11ec-a25d-b8ca3abd234e';


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

  popoverResources: any;
  popoverProjectVisible: boolean = false;

  //endregion

  //region Constructor
  constructor() {
    this.headerLinks = HeaderLinks;

    this.navbarIcons = NavbarIcons;
    this.navbarTexts = NavbarTexts;
    this.navbarDropdownIcons = NavbarDropdownIcons;
    this.popoverResources = POPUP_TASK_RESOURCES;

    this.popupEnums = POPUP_ENUMS;
  }
  //endregion

  //region Methods

  ngOnInit(): void { }

  /**
   * M??? popup th??m c??ng vi???c
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
   * M??? popup th??m member
    * @param open
   * CreatedBy: PHDUONG (27/09/2021)
   */
  openPopupMember(open: boolean) {
    this.popupMemberVisible = open;
    this.popupMemberWidth = POPUP_ENUMS.PopupHuge;
    this.popupMemberTitle = popupResources.PopupMemberTitle;
  }

  /**
   * Ph????ng th???c l??u th??ng tin th??nh vi??n v??o userList
   * CreatedBy: PHDUONG (27/09/2021)
   */
  renderMembersInfo(data: User[]): void {
    this.popupMemberVisible = popupResources.Invisible;
    data.forEach(user => {
      this.userList.push(user);
    });
  }

  /**
    * M??? popup t????ng ???ng
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
   * ????ng popup
   * CreatedBy: PHDUONG(04/10/2021)
   */
  closePopup() {
    this.userList = Object.assign([], this.userDefault);
    this.popupVisible = popupResources.Invisible;
    this.selectedMembers = [];
  }

  /**
   * ????ng Member popup
   * CreatedBy: PHDUONG(04/10/2021)
   */
  closeMemberPopup() {
    this.popupMemberVisible = popupResources.Invisible;
  }

  /**
   * H??m m???/????ng Popover th??m d??? ??n/ph??ng ban 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  toggleDropdown() {
    this.popoverVisible = !this.popoverVisible;
  }

  /**
   * H??m m???/????ng Popover ch???n d??? ??n
   * CreatedBy: PHDUONG(23/09/2021)
   */
  openPopover() {
    this.popoverProjectVisible = !this.popoverProjectVisible;
  }

  /**
  * Ph????ng th???c style link t????ng ???ng ??? t???ng page
  * @param linkIndex
  * CreatedBy: PHDUONG(23/09/2021)
  */
  activeLink(linkIndex: number) {
    this.currentLink = linkIndex;
  }

  /**
   * Reload trang Project
   * CreatedBy: PHDUONG(10/10/2021)
   */
  reloadProject() {
    this.reloadProjectData.emit();

    this.popoverProjectVisible = !this.popoverProjectVisible;
  }

  /**
   * H??m hi???n th??? th??ng b??o ch???c n??ng kh??ng kh??? d???ng
   * CreatedBy: PHDUONG(09/10/2021)
   */
  funcNotAvailable() {
    this.toastMessage = "Ch???c n??ng trong giai ??o???n ph??t tri???n";
    this.type = "custom";
    this.toastVisible = true;
  }

  //endregion
}
