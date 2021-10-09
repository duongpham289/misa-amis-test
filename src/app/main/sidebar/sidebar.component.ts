import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department';

import { MENU_ITEMS } from '../../shared/resources/menu-resources'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() departments: Department[] = [];

  mainMenuItems!: any
  
  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';

  constructor() {
    this.mainMenuItems = MENU_ITEMS;
  }

  ngOnInit(): void {
  }

  funcNotAvailable() {
    this.toastMessage = "Chức năng trong giai đoạn phát triển";
    this.type = "custom";
    this.toastVisible = true;
  }
}
