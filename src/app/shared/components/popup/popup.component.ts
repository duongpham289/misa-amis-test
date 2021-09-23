import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import POPUP_ENUM from '../../enum/popup-enum'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  currentTemplate: string = 'projectTemplate';

  @Input() isPopupOpen = false;

  @Output() isPopupClose = new EventEmitter<boolean>();

  popupWidth: any;
  popupVariables: any;
  popupTitle: any;

  constructor() {
    this.popupVariables = POPUP_ENUM;

    if (this.currentTemplate === 'departmentTemplate') {
      this.popupTitle = this.popupVariables.PopupDepartmentTitle;
      this.popupWidth = this.popupVariables.PopupDepartmentWidth;
    } else if (this.currentTemplate === 'projectTemplate') {
      this.popupTitle = this.popupVariables.PopupProjectTitle;
      this.popupWidth = this.popupVariables.PopupProjectWidth;
    } else {
      this.popupTitle = this.popupVariables.PopupTaskTitle;
      this.popupWidth = this.popupVariables.PopupTaskWidth;
    }
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
