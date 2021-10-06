import { Component, OnInit, Input, ViewChild, Output, EventEmitter, DoCheck } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @ViewChild(DxTextBoxComponent) focusInput!: DxTextBoxComponent;


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

  userList: User[] = [];
  dropdownVisible: boolean = false;

  constructor(private userService: UserService) {
  }

  /**
   * Bắt sự kiện thay đổi input
   * @param data input object
   * CreatedBy: PHDUONG(04/10/2021)
   */
  valueChanged(data: any) {

    var className = data.element.className;
    
    if (className.includes("ms-text-field__with-list")) {
      this.userService.getUserByName(data.value).subscribe(users => this.userList = users);
      this.dropdownVisible = true;
    }else{
      this.modelChange.emit(data.value);
    }
  }

  /**
   * Hàm autofocus
   * CreatedBy: PHDUONG(04/10/2021)
   */
  setFocus() {
    this.focusInput.instance.focus();
  }

  /**
   * Hàm đặt lại Input
   * CreatedBy: PHDUONG(04/10/2021)
   */
  resetInput() {
    this.focusInput.instance.reset();
  }

  ngOnInit(): void {
  }

}
