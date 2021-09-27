import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup-service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() isPopupOpen = false;

  constructor(private _popupService: PopupService) { }

  ngOnInit(): void {
  }

  /**
   * Phương thức call service để đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
   closePopup() {
    const popupVisible = false;

    const popupMode = undefined;

    this._popupService.setPopupMode(popupMode, popupVisible);
  }

}
