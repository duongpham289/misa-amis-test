import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { iconNavbar } from 'src/app/shared/interfaces/navbar-icon';
import { NavbarDropdownIcons, NavbarIcons } from 'src/app/shared/resources/navbar-resource';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownVisible: boolean = false;
  // @Input() navbarIcons: iconNavbar[] = [];
  @Output() isPopupOpen = new EventEmitter<boolean>();
  navbarIcons: iconNavbar[];
  dropdownIcons: iconNavbar[];

  constructor() { 
    this.navbarIcons = NavbarIcons;
    this.dropdownIcons = NavbarDropdownIcons;
    
   }

  ngOnInit(): void {
  }

  /**
   * Hàm mở popup
   * CreatedBy: PHDUONG(23/09/2021)
   */
  openPopup() {
    this.isPopupOpen.emit(true)
  }

  /**
   * Hàm mở/đóng dropdown 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
