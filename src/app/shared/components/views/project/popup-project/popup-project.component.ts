import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Department, DepartmentService } from 'src/app/services/department.service';
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
  @Output() popupClose = new EventEmitter<boolean>();
  @Output() popupMemberOpen = new EventEmitter<boolean>();
  
  popupProjectVar: any;
  selectMemberButton: any;
  nameInput: string = '';
  popoverWidth: string = '570px';

  
  departmentOptions: Department[] = [];
  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";
  
  constructor(private service: DepartmentService) { 
    this.popupProjectVar = popupResources;
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
    this.popupClose.emit();
  }

  getDepartments(): void {
    this.service.getDepartmentByUserId(this.userId).subscribe(departments => {
      departments.forEach(department => {
        if (department.IsBelongToCurrentUser) {
          this.departmentOptions.push(department);
        }
      });
    });
  }

  ngOnInit(): void {
    this.getDepartments();
  }

}
