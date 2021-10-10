import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department';

import { MENU_ITEMS } from '../../shared/resources/menu-resources'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //region Declare
  @Input() departments: Department[] = [];

  mainMenuItems!: any

  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';
  //endregion

  //region Constructor
  constructor() {
    this.mainMenuItems = MENU_ITEMS;
  }
  //endregion


  //region Methods

  ngOnInit(): void { }

  /**
   * Hàm hiển thị thông báo chức năng không khả dụng
   * CreatedBy: PHDUONG(09/10/2021)
   */
  funcNotAvailable() {
    this.toastMessage = "Chức năng trong giai đoạn phát triển";
    this.type = "custom";
    this.toastVisible = true;
  }

  //endregion
}
