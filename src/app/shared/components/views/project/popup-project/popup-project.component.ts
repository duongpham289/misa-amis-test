import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';

import popupResources from 'src/app/shared/resources/popup-resources';
import { DateBoxComponent } from '../../../base/date-box/date-box.component';
import { SelectBoxComponent } from '../../../base/select-box/select-box.component';
import { TextFieldComponent } from '../../../base/text-field/text-field.component';

import { ProjectService } from 'src/app/services/project.service';
import { Department } from 'src/app/shared/models/department';
import { Project } from 'src/app/shared/models/project';
import { User } from 'src/app/shared/models/user';
import { ProjectUser } from 'src/app/shared/models/project-user';
import { ReloadDataService } from 'src/app/data-tranfer/reload-data.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-popup-project',
  templateUrl: './popup-project.component.html',
  styleUrls: ['./popup-project.component.scss']
})
export class PopupProjectComponent implements OnInit {

  //region Declare

  @ViewChild('projectNameInput') projectNameInput!: TextFieldComponent;
  @ViewChild('areaInput') areaInput!: TextFieldComponent;
  @ViewChild('memberInput') memberInput!: TextFieldComponent;
  @ViewChild('selectBox') selectBox!: SelectBoxComponent;
  @ViewChild('startDateInput') startDateInput!: DateBoxComponent;
  @ViewChild('endDateInput') endDateInput!: DateBoxComponent;

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
  descriptionInput: string = '';

  popoverWidth: string = '570px';
  projectData = <Project>{};

  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';
  //endregion


  //region Constructor
  constructor(private reloadData: ReloadDataService,private projectService: ProjectService ) {
    this.popupProjectVar = popupResources;
    this.selectMemberButton = {
      icon: '../../../assets/icons/icon-pick-doer-blue.svg',
      text: 'Ch???n',
      onClick: () => {
        this.popupMemberOpen.emit(true);
      }
    };
  }
  //endregion

  //region Methods

  ngOnInit(): void { }

  /**
   * T??i thi???t l???p Input
   * CreatedBy: PHDUONG (27/09/2021)
   */
  focusInput() {
    this.projectNameInput.setFocus();
  }

  /**
   * Ph????ng th???c call service ????? ????ng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    this.projectData = new Project();

    this.projectNameInput.resetInput();
    this.areaInput.resetInput();
    this.memberInput.resetInput();
    this.selectBox.resetInput();
    this.startDateInput.resetInput();
    this.endDateInput.resetInput();

    this.popupClose.emit();
  }

  /**
   * Th??m user v??o UserList
   * @param user 
   * CreatedBy: PHDUONG(04/10/2021)
   */
  addUserList(user: User) {
    this.userList.push(user);
  }

  /**
   * L??u d??? li???u thay ?????i v??o 1 bi???n, bi???n n??y s??? ???????c pass v??o api
   * @param data
   * Author: NQMinh (03/10/2021)
   */
  bindData(data: any) {
    // @ts-ignore
    this.projectData[data.inputName] = data.inputValue;
    // @ts-ignore
    this.projectData[data.inputDisplayName] = data.inputDisplayValue;
  }

  /**
   * Ph????ng th???c call service ????? save Data
   * CreatedBy: PHDUONG (06/10/2021)
   */
  saveData() {
    this.projectData.ProjectName = this.nameInput;
    this.projectData.Description = this.descriptionInput;

    var listId = new Array<string>();
    this.userList.forEach(user => {
      listId.push(user.UserId);
    });


    this.projectService
      .addProject(this.projectData)
      .subscribe(projectId => {

        var projectUser = <ProjectUser>{};
        projectUser.ProjectId = projectId;
        projectUser.ListUserId = listId;

        this.projectService.addProjectUser(projectUser).subscribe(projectUser => {
          this.reloadData.reloadDepartmentData();
          this.addSuccess();
          this.closePopup()
        });

      });
  }

  /**
   * H??m hi???n th??? Th??m th??nh c??ng
   * CreatedBy: PHDUONG(09/10/2021)
   */
   addSuccess() {
    this.toastMessage = "Th??m d??? ??n th??nh c??ng";
    this.type = "success";
    this.toastVisible = true;
  }

  //endregion

}
