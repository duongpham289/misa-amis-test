import { Component, Input, OnInit, ViewChild } from '@angular/core';
import popupResources from 'src/app/shared/resources/popup-resources';
import { PopupService } from 'src/app/shared/services/popup-service';
import { TextFieldComponent } from '../../../base/text-field/text-field.component';

@Component({
  selector: 'app-popup-project',
  templateUrl: './popup-project.component.html',
  styleUrls: ['./popup-project.component.scss']
})
export class PopupProjectComponent implements OnInit {

  @ViewChild('name') focusInput!: TextFieldComponent;

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() isPopupOpen = false;
  popupProjectVar: any;
  
  constructor(private _popupService: PopupService) { 
    this.popupProjectVar = popupResources
  }

  inputAutoFocus() {    
    this.focusInput.setFocus();
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
