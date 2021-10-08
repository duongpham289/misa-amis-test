import {  DatePipe} from '@angular/common';
import {  Component,  EventEmitter,  Input,  OnInit,  Output} from '@angular/core';
import {  locale} from 'devextreme/localization';
import {  TaskService} from 'src/app/services/task.service';
import { Department } from 'src/app/shared/models/department';
import { Project } from 'src/app/shared/models/project';
import { User } from 'src/app/shared/models/user';
import { Task } from 'src/app/shared/models/task';
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

  projectDefault: Project = <Project>{};
  userDefault: User = <User>{};
  dropdownDeadlineVisible!: boolean;
  taskName: string = '';

  pipe = new DatePipe('en-US');

  deadline: any;
  deadlineValue: any;
  deadlineTextValue: any;

  constructor(private taskService: TaskService) {
    this.popupTaskVar = popupResources;
  }

  /**
  * Hàm Chọn dự án
  * CreatedBy: PHDUONG(23/09/2021)
  */
  chooseProject(project: Project) {
    this.projectDefault = project;
    this.dropdownDepartmentVisible = false;
  }

  /**
   * Nhận gá trị taskName
   * CreatedBy: PHDUONG(23/09/2021)
   */
  onInputTaskname(event: any) { // without type info
    this.taskName = event.target.value;
  }

  /**
   * Hàm chọn User
   * CreatedBy: PHDUONG(23/09/2021)
   */
  chooseUser(user: User) {
    if (this.userDefault == user) {
      this.userDefault = <User>{};
    } else {
      this.userDefault = user;
    }
    this.dropdownUserVisible = false;
  }

  /**
   * Hàm Thay đổi giá trị deadline trên lịch
   * CreatedBy: PHDUONG(23/09/2021)
   */
  changeCalendarValue(data: any): void {
    this.deadlineTextValue = this.pipe.transform(new Date(data.value), 'dd/MM/yyyy');
  }

  /**
   * Hàm Thay đổi giá trị deadline trên input
   * CreatedBy: PHDUONG(23/09/2021)
   */
  changeDate(data: any) {
    var datearray = data.split("/");

    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];

    if (this.deadlineValue != new Date(newdate)) {
      this.deadlineValue = new Date(newdate);
    }
  }

  /**
   * Hàm Lưu giá trị deadline
   * CreatedBy: PHDUONG(23/09/2021)
   */
  saveDate() {
    this.deadline = this.deadlineTextValue;
    this.dropdownDeadlineVisible = false;
  }

  /**
   * Hàm mở/đóng popover
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

  /**
   * Hàm mở/đóng dropdown 
   * CreatedBy: PHDUONG(23/09/2021)
   */
  saveTask() {

    var task = <Task>{};
    task.ProjectId = this.projectDefault.ProjectId;
    task.TaskName = this.taskName;
    task.EndDate = new Date(this.deadlineValue);
    task.AssigneeId = this.userDefault.UserId;
    task.AssigneeName = this.userDefault.FullName;
    task.AssigneeEmail = this.userDefault.Email;

    this.taskService.addTask(task).subscribe(task => {
      this.closePopup()
    });
  }

  ngOnInit(): void {
    locale("vi-VN");
    this.projectDefault = this.departmentOptions[0].ListProjects[0];
  }

}
