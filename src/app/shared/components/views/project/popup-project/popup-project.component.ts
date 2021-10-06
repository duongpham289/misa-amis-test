import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Department, DepartmentService } from 'src/app/services/department.service';
import { User, UserService } from 'src/app/services/user.service';
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
  @ViewChild(TextFieldComponent) inputTextField!: TextFieldComponent;

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;
  @Input() departmentOptions: Department[] = [];
  
  @Input() userList: User[] = [];

  @Output() popupClose = new EventEmitter<boolean>();
  @Output() popupMemberOpen = new EventEmitter<boolean>();
  
  popupProjectVar: any;
  selectMemberButton: any;
  nameInput: string = '';
  popoverWidth: string = '570px';

  
  
  
  constructor() { 
    this.popupProjectVar = popupResources;
    this.selectMemberButton = {
      icon: '../../../assets/icons/icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {        
        this.popupMemberOpen.emit(true);
      }
    };
  }
  
  ngOnInit(): void {
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
    this.popupClose.emit();
  } 

  addUserList(user: User){
    this.userList.push(user);
  }


}
