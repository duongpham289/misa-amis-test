import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  currentTemplate: string = 'project';

  closeButtonOptions: any;

  @Input() isPopupOpen = false;

  @Output() isPopupClose = new EventEmitter<boolean>();

  constructor() { }

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
