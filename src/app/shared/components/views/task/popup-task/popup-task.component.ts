import { Component, Input, OnInit } from '@angular/core';
import popupResources from 'src/app/shared/resources/popup-resources';
import { PopupService } from 'src/app/shared/services/popup-service';

@Component({
  selector: 'app-popup-task',
  templateUrl: './popup-task.component.html',
  styleUrls: ['./popup-task.component.scss']
})
export class PopupTaskComponent implements OnInit {
  
  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() isPopupOpen = false;
  popupTaskVar: any;
  
  constructor(private _popupService: PopupService) { 
    this.popupTaskVar = popupResources
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
  ngOnInit(): void {
  }

}
