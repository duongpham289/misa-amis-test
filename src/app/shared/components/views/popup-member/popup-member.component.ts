import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { UserService } from 'src/app/services/user.service';
import { MODAL_MEMBER_CONSTANTS } from 'src/app/shared/constants/modal-member';
import { MemberColumn, MemberColumns } from 'src/app/shared/models/member-columns';
import { User } from 'src/app/shared/models/user';
import popupResources from 'src/app/shared/resources/popup-resources';
import { TextFieldComponent } from '../../base/text-field/text-field.component';

@Component({
  selector: 'app-popup-member',
  templateUrl: './popup-member.component.html',
  styleUrls: ['./popup-member.component.scss']
})
export class PopupMemberComponent implements OnInit {
  //region Declare
  @ViewChild('search') searchInput!: TextFieldComponent;
  @ViewChild('gridMember') gridMember!: DxDataGridComponent;

  gridData: User[] = [];
  gridColumns: MemberColumn[] = [];
  modalConst: any;
  popupMemberVar: any;

  selectedMemberIds: string[] = [];
  @Input() selectedMembers: User[] = [];

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;

  @Output() popupClose = new EventEmitter<any>();
  @Output() onModalSubmitted = new EventEmitter<User[]>();
  //rendregion

  //region Constructor
  constructor(private userService: UserService) {
    this.popupMemberVar = popupResources;
    this.gridColumns = MemberColumns;
    this.modalConst = MODAL_MEMBER_CONSTANTS;
  }
  //endregion

  //region Methods

  ngOnInit(): void { }

  /**
   * Tái thiết lập Input
   * CreatedBy: PHDUONG (27/09/2021)
   */
  focusInput() {
    this.searchInput.setFocus();
  }

  /**
   * Phương thức call service để đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    this.searchInput.resetInput();
    this.popupClose.emit(false);
  }

  /**
   * Phương thức chọn thành viên
   * @param data
   * CreatedBy: PHDUONG (27/09/2021)
   */
  selectionChangedHandler(data: any): void {
    if (data.selectedRowsData.length > 0) {
      this.selectedMembers = data.selectedRowsData;

    }
  }

  /**
   * Phương thức xử lý sự kiện khi người dùng muốn lưu các thành viên
   * CreatedBy: PHDUONG (27/09/2021)
   */
  submitMembers(): void {
    this.onModalSubmitted.emit(this.selectedMembers);
  }

  clearSelectedRows() {
    let dataGrid = this.gridMember.instance;
    dataGrid.clearSelection();
    dataGrid.option("focusedRowIndex", -1);
  }

  reloadGridData() {
    this.userService.getUsers().subscribe(users => {
      this.gridData = users;
      if (users) {

        users.forEach(user => {
          if (this.userService.userId == user.UserId) {
            this.gridData.splice(this.gridData.indexOf(user), 1);
          }
        });

        this.selectedMembers.forEach(userSelected => {
          users.forEach(user => {
            if (userSelected.UserId == user.UserId) {
              this.gridData.splice(this.gridData.indexOf(user), 1);
            }
          });
        });
        if (this.selectedMembers.length <= 0) {
          this.clearSelectedRows();
        }
      }
    });
  }
  //endregion
}
