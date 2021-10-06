import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { locale } from 'devextreme/localization';
import { Department, Project } from 'src/app/services/department.service';
import { User } from 'src/app/services/user.service';
import popupResources from 'src/app/shared/resources/popup-resources';

@Component({
  selector: 'app-popup-task',
  templateUrl: './popup-task.component.html',
  styleUrls: ['./popup-task.component.scss']
})
export class PopupTaskComponent implements OnInit {

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;
  @Input() departmentOptions: Department[] = [];
  @Input() userList: User[] = [];
  @Output() popupClose = new EventEmitter<boolean>();

  popupTaskVar: any;
  dropdownDepartmentVisible: boolean = false;
  dropdownUserVisible: boolean = false;
  projectDefault!: Project;
  userDefault: User = <User>{};
  dropdownDeadlineVisible!: boolean;
  taskName: string = '';

  pipe = new DatePipe('en-US');

  deadline:any;
  deadlineValue: any;
  deadlineTextValue: any;

  constructor() {
    this.popupTaskVar = popupResources;
  }

  changeCalendarValue(data: any): void {
    this.deadlineTextValue = this.pipe.transform(new Date(data.value), 'dd/MM/yyyy');
  }

  changeDate(data: any) {
    var datearray = data.split("/");

    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
    
    if (this.deadlineValue != new Date(newdate)) {
      this.deadlineValue = new Date(newdate);
    }
  }

  saveDate(){
    this.deadline = this.deadlineTextValue;
    this.dropdownDeadlineVisible = false;
  }

  onInputTaskname(event: any) { // without type info
    this.taskName = event.target.value;
  }
  /**
   * Hàm mở/đóng dropdown 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  toggleDropdown(dropdownMode: number) {
    switch (dropdownMode) {
      case 0:

        this.dropdownDepartmentVisible = !this.dropdownDepartmentVisible;
        break;
      case 1:

        this.dropdownUserVisible = !this.dropdownUserVisible;
        break;
      case 2:

        this.dropdownDeadlineVisible = !this.dropdownDeadlineVisible;
        break;

      default:
        break;
    }
  }

  /**
   * Phương thức call service để đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    this.popupClose.emit(false);
  }

  chooseProject(project: Project) {
    this.projectDefault = project;
    this.dropdownDepartmentVisible = false;
  }

  chooseUser(user: User) {
    if (this.userDefault == user) {
      this.userDefault = <User>{};
    } else {
      this.userDefault = user;
    }
    this.dropdownUserVisible = false;
  }

  saveTask(){
    var temp = [];
    temp.push(this.projectDefault.ProjectId);
    temp.push(this.taskName);
    temp.push(this.deadline);
    temp.push(this.userDefault.UserId);
    temp.push(this.userDefault.FullName);
    temp.push(this.userDefault.Email);
    console.log(temp);
    
  }

  ngOnInit(): void {
    locale("vi-VN");
    this.projectDefault = this.departmentOptions[0].ListProjects[0];
  }

}
