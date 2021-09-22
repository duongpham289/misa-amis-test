import { Component, OnInit } from '@angular/core';

import {MENU_ITEMS} from '../../shared/constants/menu'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  mainMenuItems = MENU_ITEMS;

  ngOnInit(): void {
  }

}
