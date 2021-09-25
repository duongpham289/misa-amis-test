import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import POPUP_ENUM from 'src/app/shared/resources/popup-resources';

@Component({
  selector: 'app-popup-department',
  templateUrl: './popup-department.component.html',
  styleUrls: ['./popup-department.component.scss']
})
export class PopupDepartmentComponent implements OnInit {
  
  @Input() isPopupOpen!:boolean;
  @Output() isPopupClose = new EventEmitter<boolean>();

  popupDepartmentVar: any;


  constructor() { 
    this.popupDepartmentVar = POPUP_ENUM
  }

  ngOnInit(): void {
  } 
  /**
   * Hàm mở popup
   * CreatedBy: PHDUONG(23/09/2021)
   */
  closePopup() {
    this.isPopupClose.emit(false);
    // this.isPopupOpen = false
  }

}
