import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';
import { MODAL_MEMBER_CONSTANTS } from 'src/app/shared/constants/modal-member';
import { MemberColumn, MemberColumns } from 'src/app/shared/models/member-columns';
import popupResources from 'src/app/shared/resources/popup-resources';
import { TextFieldComponent } from '../../base/text-field/text-field.component';

@Component({
  selector: 'app-popup-member',
  templateUrl: './popup-member.component.html',
  styleUrls: ['./popup-member.component.scss']
})
export class PopupMemberComponent implements OnInit {

  
  @ViewChild('search') focusInput!: TextFieldComponent;
  @ViewChild(TextFieldComponent) inputTextField!: TextFieldComponent;

  gridData: User[] = [];
  gridColumns: MemberColumn[] = [];
  modalConst: any;
  popupMemberVar: any;

  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;

  @Output() popupClose= new EventEmitter<any>();

  constructor(private _userService: UserService) {
    this.popupMemberVar = popupResources;
    this.gridColumns = MemberColumns;
    this.modalConst = MODAL_MEMBER_CONSTANTS;
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      this.gridData = users;
    });
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
    this.popupClose.emit(false);
  }

}
