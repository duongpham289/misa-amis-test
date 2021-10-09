import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';

import popupResources from 'src/app/shared/resources/popup-resources';
import { TextFieldComponent } from '../../../base/text-field/text-field.component';

import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/shared/models/department';
import { DepartmentUser } from 'src/app/shared/models/department-user';

import { User } from 'src/app/shared/models/user';
import { ReloadDataService } from 'src/app/data-tranfer/reload-data.service';

@Component({
  selector: 'app-popup-department',
  templateUrl: './popup-department.component.html',
  styleUrls: ['./popup-department.component.scss']
})
export class PopupDepartmentComponent implements OnInit {

  @ViewChild('departmentNameInput') departmentNameInput!: TextFieldComponent;
  @ViewChild('memberInput') memberInput!: TextFieldComponent;

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;

  @Output() popupClose = new EventEmitter<boolean>();
  @Output() popupMemberOpen = new EventEmitter<boolean>();

  popupDepartmentVar: any;
  selectMemberButton: any;
  nameInput: string = '';
  popoverWidth: string = '450px';

  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";

  @Input() userList: User[] = [];

  constructor(private departmentService: DepartmentService, private reloadData: ReloadDataService) {
    this.popupDepartmentVar = popupResources;
    this.selectMemberButton = {
      icon: '../../../assets/icons/icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.popupMemberOpen.emit(true);
      }
    };
  }

  /**
   * Tái thiết lập Input
   * CreatedBy: PHDUONG(04/10/2021)
   */
  focusInput() {
    this.departmentNameInput.setFocus();
  }

  /**
   * Phương thức call service để đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    this.departmentNameInput.resetInput();
    this.memberInput.resetInput();
    this.popupClose.emit(false);
  }

  /**
   * Phương thức call service để save Data
   * CreatedBy: PHDUONG (06/10/2021)
   */
  saveData() {

    var listId = new Array<string>();
    this.userList.forEach(user => {
      listId.push(user.UserId);
    });

    var department = <Department>{};
    department.DepartmentName = this.nameInput;
    department.UserId = this.userId;


    this.departmentService
      .addDepartment(department)
      .subscribe(departmentId => {

        var departmentUser = <DepartmentUser>{};
        departmentUser.DepartmentId = departmentId;
        departmentUser.ListUserId = listId;

        this.departmentService.addDepartmentUser(departmentUser).subscribe(departmentUser => {
          this.reloadData.reloadDepartmentData();
          this.closePopup()
        });

      });
  }

  /**
   * Thêm user vào UserList
   * @param user 
   * CreatedBy: PHDUONG(04/10/2021)
   */
  addUserList(user: User) {
    this.userList.push(user);
  }

  ngOnInit(): void { }

}
