import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownVisible: boolean = false;
  constructor() { }

  @Output() isPopupOpen = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  /**
   * Hàm mở popup
   * CreatedBy: PHDUONG(23/09/2021)
   */
  openPopup(){
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
