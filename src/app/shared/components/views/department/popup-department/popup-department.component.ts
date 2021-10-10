import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';

import popupResources from 'src/app/shared/resources/popup-resources';
import { TextFieldComponent } from '../../../base/text-field/text-field.component';

import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/shared/models/department';
import { DepartmentUser } from 'src/app/shared/models/department-user';

import { User } from 'src/app/shared/models/user';
import { ReloadDataService } from 'src/app/data-tranfer/reload-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-popup-department',
  templateUrl: './popup-department.component.html',
  styleUrls: ['./popup-department.component.scss']
})
export class PopupDepartmentComponent implements OnInit {

  //region Declare

  @ViewChild('departmentNameInput') departmentNameInput!: TextFieldComponent;

  @ViewChild('memberInput') memberInput!: TextFieldComponent;

  @Input() userList: User[] = [];

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;

  @Output() popupClose = new EventEmitter<boolean>();
  @Output() popupMemberOpen = new EventEmitter<boolean>();

  popupDepartmentVar: any;
  selectMemberButton: any;
  nameInput: string = '';
  popoverWidth: string = '450px';

  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';

  //endregion


  //region Constructor
  constructor(private reloadData: ReloadDataService, private departmentService: DepartmentService, private userService: UserService) {
    this.popupDepartmentVar = popupResources;
    this.selectMemberButton = {
      icon: '../../../assets/icons/icon-pick-doer-blue.svg',
      text: 'Chọn',
      onClick: () => {
        this.popupMemberOpen.emit(true);
      }
    };
  }
  //endregion


  //region Methods

  ngOnInit(): void { }

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
    department.UserId = this.userService.userId;


    this.departmentService
      .addDepartment(department)
      .subscribe(departmentId => {

        var departmentUser = <DepartmentUser>{};
        departmentUser.DepartmentId = departmentId;
        departmentUser.ListUserId = listId;

        this.departmentService.addDepartmentUser(departmentUser).subscribe(departmentUser => {
          this.reloadData.reloadDepartmentData();
          this.addSuccess();
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
  
  /**
     * Hàm hiển thị Thêm thành công
     * CreatedBy: PHDUONG(09/10/2021)
     */
  addSuccess() {
    this.toastMessage = "Thêm phòng ban thành công";
    this.type = "success";
    this.toastVisible = true;
  }

  //endregion

}
