import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { ElementRef, AfterViewInit } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

import { DxTextBoxComponent } from 'devextreme-angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @ViewChild('textBox') textBoxInput!: DxTextBoxComponent;
  @ViewChild('textArea') textAreaInput!: DxTextBoxComponent;

  @Input() inputLabel!: string;
  @Input() inputPlaceholder!: string;
  @Input() isRequired: boolean = false;

  @Input() textFieldHeight: string = '40px';
  @Input() textFieldWidth: string = '40px';
  @Input() popoverWidth: string = '';

  @Input() textArea!: boolean;
  @Input() inputMode: string = 'text'
  @Input() bonusClass?: string;
  @Input() bonusButton?: any;

  @Input() model: string = '';
  @Output() modelChange = new EventEmitter<string>();

  @Input() modelArea: string = '';
  @Output() modelAreaChange = new EventEmitter<string>();

  @Output() userListChange = new EventEmitter<User>();

  userList: User[] = [];
  userSelected: User[] = [];
  dropdownVisible: boolean = false;

  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

  }

  /**
   * Bắt sự kiện thay đổi input
   * @param data input object
   * CreatedBy: PHDUONG(04/10/2021)
   */
  valueChanged(data: any) {

    var className = data.element.className;

    if (className.includes("ms-text-field__with-list") && data.value != '') {


      fromEvent(this.textBoxInput.instance.element(), 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(500),
          distinctUntilChanged(),
          tap((text) => {
            this.userService.getUserByName(this.textBoxInput.instance.option("text")).subscribe(users => {
              this.userList = users;
              if (users) {
                users.forEach(user => {
                  if (this.userId == user.UserId) {
                    this.userList.splice(this.userList.indexOf(user), 1);
                  }
                });
    
                this.userSelected.forEach(userSelected => {
                  users.forEach(user => {
                    if (userSelected.UserId == user.UserId) {
                      this.userList.splice(this.userList.indexOf(user), 1);
                    }
                  });
                });
              }
            });
          })
        )
        .subscribe();

      this.dropdownVisible = true;

    } else {
      this.modelChange.emit(data.value);
    }
  }
  /**
   * Bắt sự kiện thay đổi input
   * @param data input object
   * CreatedBy: PHDUONG(04/10/2021)
   */
  valueAreaChanged(data: any) {
    this.modelAreaChange.emit(data.value);
  }

  /**
   * Thêm user Vào UserList
   * @param user 
   * CreatedBy: PHDUONG(04/10/2021)
   */
  addUser(user: User) {
    this.dropdownVisible = false;

    this.userListChange.emit(user);

    this.userSelected.push(user)
  }

  /**
   * Hàm autofocus
   * CreatedBy: PHDUONG(04/10/2021)
   */
  setFocus() {
    this.textBoxInput.instance.focus();
  }

  /**
   * Hàm đặt lại Input
   * CreatedBy: PHDUONG(04/10/2021)
   */
  resetInput() {
    if (this.textBoxInput) {
      this.textBoxInput.instance.reset();
    } else if (this.textAreaInput) {
      this.textAreaInput.instance.reset();
    }
  }

}
