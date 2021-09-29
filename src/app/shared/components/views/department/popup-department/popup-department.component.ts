import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import popupResources from 'src/app/shared/resources/popup-resources';
import { PopupService } from 'src/app/shared/services/popup-service';
import { TextFieldComponent } from '../../../base/text-field/text-field.component';

@Component({
  selector: 'app-popup-department',
  templateUrl: './popup-department.component.html',
  styleUrls: ['./popup-department.component.scss']
})
export class PopupDepartmentComponent implements OnInit {
  
  @ViewChild('name') focusInput!: TextFieldComponent;

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() isPopupOpen = false;
  popupDepartmentVar: any;


  constructor(private _popupService: PopupService) {
    this.popupDepartmentVar = popupResources
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
