import MODAL_CONSTANTS from '../../../../resources/popup-resources';
import {Component, OnInit} from '@angular/core';

import {PopupService} from "../../../../services/popup-service";

@Component({
  selector: 'app-popup-footer',
  templateUrl: './popup-footer.component.html',
  styleUrls: ['./popup-footer.component.scss']
})
export class PopupFooterComponent implements OnInit {
  modalVariables;
  constructor(private _popupService: PopupService) {
    this.modalVariables = MODAL_CONSTANTS;
  }

  ngOnInit(): void {
  }

  /**
   * Phương thức call service để đóng popup
   * Author: NQMinh (23/09/2021)
   */
  hidePopup() {
    const popupVisible = false;

    //Khi đóng modal thì không quan tâm loại modal gì nên đặt bằng undefined
    const popupMode = undefined;

    this._popupService.setPopupMode(popupMode, popupVisible);
  }

}
