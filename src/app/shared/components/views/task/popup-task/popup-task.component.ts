import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { locale } from 'devextreme/localization';

import { TextFieldComponent } from '../../../base/text-field/text-field.component';

import { TaskService } from 'src/app/services/task.service';
import { Department } from 'src/app/shared/models/department';

import { Project } from 'src/app/shared/models/project';
import { User } from 'src/app/shared/models/user';
import { Task } from 'src/app/shared/models/task';

import popupResources from 'src/app/shared/resources/popup-resources';
import { POPUP_TASK_RESOURCES } from 'src/app/shared/resources/popup-task-resources';
import { ReloadDataService } from 'src/app/data-tranfer/reload-data.service';

@Component({
  selector: 'app-popup-task',
  templateUrl: './popup-task.component.html',
  styleUrls: ['./popup-task.component.scss']
})
export class PopupTaskComponent implements OnInit {

  //region Declare

  @ViewChild('inputTaskName') inputTaskName!: ElementRef;
  @ViewChild('search') searchInput!: TextFieldComponent;

  @Input() editMode: boolean = false;
  @Input() popupTaskData = <Task>{};
  @Input() currentProject = <Project>{};

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;
  @Input() departmentOptions: Department[] = [];
  @Input() userList: User[] = [];
  @Output() popupClose = new EventEmitter<boolean>();

  popupTaskVar: any;
  popupTaskConst: any;

  dropdownDepartmentVisible: boolean = false;
  dropdownUserVisible: boolean = false;
  dropdownDeadlineVisible!: boolean;
  dropdownProgressVisible!: boolean;

  projectDefault: Project = <Project>{};
  taskName: string = '';

  pipe = new DatePipe('en-US');

  deadlineValue: any;
  deadlineTextValue: any;

  processValue: any;

  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';
  //endregion

  //region Constructor

  constructor(private cdRef: ChangeDetectorRef, private taskService: TaskService, private reloadData: ReloadDataService) {
    this.popupTaskVar = popupResources;
    this.popupTaskConst = POPUP_TASK_RESOURCES;
  }
  //endregion

  //region Methods

  ngOnInit() {
    locale("vi-VN");
    if (this.currentProject.ProjectId) {
      this.projectDefault = this.currentProject;
    } else {
      this.projectDefault = this.departmentOptions[0].ListProjects[0];
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  /**
  * Hàm Chọn dự án
  * CreatedBy: PHDUONG(23/09/2021)
  */
  chooseProject(project: Project) {
    this.popupTaskData.ProjectId = project.ProjectId;
    this.popupTaskData.ProjectName = project.ProjectName;
    this.dropdownDepartmentVisible = false;
  }

  /**
   * Hàm chọn User
   * CreatedBy: PHDUONG(23/09/2021)
   */
  chooseUser(user: User) {
    if (this.popupTaskData.AssigneeName == user.FullName) {
      this.popupTaskData.AssigneeId = '';
      this.popupTaskData.AssigneeEmail = '';
      this.popupTaskData.AssigneeName = '';
      this.popupTaskData.AssigneeAvatar = '';
      this.popupTaskData.AssigneeAvatarColor = '';
    } else {
      this.popupTaskData.AssigneeId = user.UserId;
      this.popupTaskData.AssigneeEmail = user.Email;
      this.popupTaskData.AssigneeName = user.FullName;
      this.popupTaskData.AssigneeAvatar = user.Avatar;
      this.popupTaskData.AssigneeAvatarColor = user.AvatarColor;
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
  changeInputDate(data: any) {
    if (data.length === 10) {
      var inputDate = data.split("/");

      var inputDateFormated = inputDate[1] + '/' + inputDate[0] + '/' + inputDate[2];

      if (this.deadlineValue != new Date(inputDateFormated)) {
        this.deadlineValue = new Date(inputDateFormated);
      }
    }
  }

  /**
   * Hàm bind dư liệu từ input, datepicker
   * CreatedBy: PHDUONG(05/10/2021)
   */
  bindData() {
    if (this.popupTaskData.EndDate) {
      this.deadlineTextValue = this.pipe.transform(new Date(this.popupTaskData.EndDate), 'dd/MM/yyyy');
      this.changeInputDate(this.deadlineTextValue);
    } else {
      this.deadlineTextValue = this.pipe.transform(new Date(), 'dd/MM/yyyy');

      this.changeInputDate(this.deadlineTextValue);
    }
    this.processValue = this.popupTaskData.Process;

    this.inputTaskName.nativeElement.focus();
  }
  /**
   * Hàm focus vào input search
   * CreatedBy: PHDUONG(05/10/2021)
   */
  inputSearchFocus() {
    this.searchInput.setFocus();
  }

  /**
   * Hàm Lưu giá trị deadline
   * CreatedBy: PHDUONG(05/10/2021)
   */
  saveDate() {
    this.popupTaskData.EndDate = new Date(this.deadlineValue.setUTCHours(23, 59, 59, 999));

    this.dropdownDeadlineVisible = false;
  }

  /**
   * Hàm mở/đóng popover
   * CreatedBy: PHDUONG(05/10/2021)
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
      case 3:

        this.dropdownProgressVisible = !this.dropdownProgressVisible;
        break;

      default:
        break;
    }
  }

  /**
   * Tăng giá trị tiến độ 5 đơn vị
   * CreatedBy: PHDUONG(05/10/2021)
   */
  addToValue(): void {
    this.processValue += 5;
  }

  /**
   * Giảm giá trị tiến độ 5 đơn vị
   * CreatedBy: PHDUONG(05/10/2021)
   */
  minusFromValue(): void {
    this.processValue -= 5;
  }

  /**
   * Thay đổi giá trị tiến độ bằng slider
   * @param data
   * CreatedBy: PHDUONG(05/10/2021)
   */
  changeValueBySlider(data: any): void {
    this.processValue = data.value;
  }

  /**
   * Thay đổi giá trị tiến độ bằng input
   * @param data
   * CreatedBy: PHDUONG(05/10/2021)
   */
  changeValueByInput(data: any): void {
    this.processValue = data.inputValue;
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng muốn thay đổi tiến độ công việc
   * CreatedBy: PHDUONG(05/10/2021)
   */
  submitProgress(): void {
    if (this.processValue > 100) {
      this.processValue = 100
    }
    this.saveTask();
    this.dropdownProgressVisible = !this.dropdownProgressVisible;
  }

  /**
   * Hàm set công việc hoàn thành
   * CreatedBy: PHDUONG(10/10/2021)
   */
  doneTask() {
    this.processValue = 100;
    this.saveTask();
  }

  /**
   * Hàm set công việc chưa hoàn thành
   * CreatedBy: PHDUONG(10/10/2021)
   */
  undoneTask() {
    this.processValue = 0;
    this.saveTask();
  }

  /**
   * Phương thức đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    if (this.editMode) {
      this.saveTask();
    }
    this.popupTaskData = <Task>{};
    this.popupClose.emit(false);
  }

  /**
   * Hàm call service lưu dữ liệu qua Api
   * CreatedBy: PHDUONG(23/09/2021)
   */
  saveTask() {

    var task = <Task>{};
    task.TaskName = this.popupTaskData.TaskName;
    task.EndDate = this.popupTaskData.EndDate;
    task.AssigneeId = this.popupTaskData.AssigneeId;
    task.AssigneeName = this.popupTaskData.AssigneeName;
    task.AssigneeEmail = this.popupTaskData.AssigneeEmail;
    task.AssigneeAvatar = this.userList[0].Avatar;
    task.AssigneeAvatarColor = this.userList[0].AvatarColor;
    task.AssignerName = this.userList[0].FullName;
    task.ProjectId = this.popupTaskData.ProjectId ? this.popupTaskData.ProjectId : this.projectDefault.ProjectId;
    task.ProjectName = this.popupTaskData.ProjectName ? this.popupTaskData.ProjectName : this.projectDefault.ProjectName;

    if (this.editMode) {
      task.Process = this.processValue;

      this.taskService.updateTask(task, this.popupTaskData.TaskId).subscribe(task => {
        this.reloadData.reloadTaskData();
        this.updateSuccess();
        this.popupTaskData.Process = this.processValue
      });
    } else {
      this.taskService.addTask(task).subscribe(task => {
        this.reloadData.reloadTaskData();
        this.addSuccess();
        this.closePopup()
      });
    }


  }

  /**
   * Hàm hiển thị thông báo chức năng không khả dụng
   * CreatedBy: PHDUONG(09/10/2021)
   */
  funcNotAvailable() {
    this.toastMessage = "Chức năng trong giai đoạn phát triển";
    this.type = "custom";
    this.toastVisible = true;
  }

  /**
   * Hàm hiển thị Cập nhật thành công
   * CreatedBy: PHDUONG(09/10/2021)
   */
  updateSuccess() {
    this.toastMessage = "Cập nhật công việc thành công";
    this.type = "success";
    this.toastVisible = true;
  }

  /**
   * Hàm hiển thị Thêm thành công
   * CreatedBy: PHDUONG(09/10/2021)
   */
  addSuccess() {
    this.toastMessage = "Thêm công việc thành công";
    this.type = "success";
    this.toastVisible = true;
  }

  //endregion

}
