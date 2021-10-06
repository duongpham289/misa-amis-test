import { Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @ViewChild(TextFieldComponent) inputTextField!: TextFieldComponent;

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;
  @Output() popupClose = new EventEmitter<boolean>();
  @Output() popupMemberOpen = new EventEmitter<boolean>();

  popupDepartmentVar: any;
  selectMemberButton: any;
  nameInput: string = '';
  popoverWidth: string = '450px';


  constructor() {
    this.popupDepartmentVar = popupResources;
    this.selectMemberButton = {
      icon: '../../../assets/icons/icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.popupMemberOpen.emit(true);
      }
    }
  } 

  /**
   * Tái thiết lập Input
   */
  resetInput() {    
    this.focusInput.setFocus();
    this.inputTextField.resetInput();
  }

  /**
   * Phương thức call service để đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    this.popupClose.emit(false);
  }

  /**
   * Phương thức call service để save Data
   * CreatedBy: PHDUONG (06/10/2021)
   */
  saveData(){
    console.log(this.nameInput);
  }

  ngOnInit(): void {
  }

}
