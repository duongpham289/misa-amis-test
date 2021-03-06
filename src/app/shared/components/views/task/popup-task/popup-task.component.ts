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
  * H??m Ch???n d??? ??n
  * CreatedBy: PHDUONG(23/09/2021)
  */
  chooseProject(project: Project) {
    this.popupTaskData.ProjectId = project.ProjectId;
    this.popupTaskData.ProjectName = project.ProjectName;
    this.dropdownDepartmentVisible = false;
  }

  /**
   * H??m ch???n User
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
   * H??m Thay ?????i gi?? tr??? deadline tr??n l???ch
   * CreatedBy: PHDUONG(23/09/2021)
   */
  changeCalendarValue(data: any): void {
    this.deadlineTextValue = this.pipe.transform(new Date(data.value), 'dd/MM/yyyy');
  }

  /**
   * H??m Thay ?????i gi?? tr??? deadline tr??n input
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
   * H??m bind d?? li???u t??? input, datepicker
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
   * H??m focus v??o input search
   * CreatedBy: PHDUONG(05/10/2021)
   */
  inputSearchFocus() {
    this.searchInput.setFocus();
  }

  /**
   * H??m L??u gi?? tr??? deadline
   * CreatedBy: PHDUONG(05/10/2021)
   */
  saveDate() {
    this.popupTaskData.EndDate = new Date(this.deadlineValue.setUTCHours(23, 59, 59, 999));

    this.dropdownDeadlineVisible = false;
  }

  /**
   * H??m m???/????ng popover
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
   * T??ng gi?? tr??? ti???n ????? 5 ????n v???
   * CreatedBy: PHDUONG(05/10/2021)
   */
  addToValue(): void {
    this.processValue += 5;
  }

  /**
   * Gi???m gi?? tr??? ti???n ????? 5 ????n v???
   * CreatedBy: PHDUONG(05/10/2021)
   */
  minusFromValue(): void {
    this.processValue -= 5;
  }

  /**
   * Thay ?????i gi?? tr??? ti???n ????? b???ng slider
   * @param data
   * CreatedBy: PHDUONG(05/10/2021)
   */
  changeValueBySlider(data: any): void {
    this.processValue = data.value;
  }

  /**
   * Thay ?????i gi?? tr??? ti???n ????? b???ng input
   * @param data
   * CreatedBy: PHDUONG(05/10/2021)
   */
  changeValueByInput(data: any): void {
    this.processValue = data.inputValue;
  }

  /**
   * Ph????ng th???c x??? l?? s??? ki???n khi ng?????i d??ng mu???n thay ?????i ti???n ????? c??ng vi???c
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
   * H??m set c??ng vi???c ho??n th??nh
   * CreatedBy: PHDUONG(10/10/2021)
   */
  doneTask() {
    this.processValue = 100;
    this.saveTask();
  }

  /**
   * H??m set c??ng vi???c ch??a ho??n th??nh
   * CreatedBy: PHDUONG(10/10/2021)
   */
  undoneTask() {
    this.processValue = 0;
    this.saveTask();
  }

  /**
   * Ph????ng th???c ????ng popup
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
   * H??m call service l??u d??? li???u qua Api
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
   * H??m hi???n th??? th??ng b??o ch???c n??ng kh??ng kh??? d???ng
   * CreatedBy: PHDUONG(09/10/2021)
   */
  funcNotAvailable() {
    this.toastMessage = "Ch???c n??ng trong giai ??o???n ph??t tri???n";
    this.type = "custom";
    this.toastVisible = true;
  }

  /**
   * H??m hi???n th??? C???p nh???t th??nh c??ng
   * CreatedBy: PHDUONG(09/10/2021)
   */
  updateSuccess() {
    this.toastMessage = "C???p nh???t c??ng vi???c th??nh c??ng";
    this.type = "success";
    this.toastVisible = true;
  }

  /**
   * H??m hi???n th??? Th??m th??nh c??ng
   * CreatedBy: PHDUONG(09/10/2021)
   */
  addSuccess() {
    this.toastMessage = "Th??m c??ng vi???c th??nh c??ng";
    this.type = "success";
    this.toastVisible = true;
  }

  //endregion

}
