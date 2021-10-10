import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxDateBoxComponent } from 'devextreme-angular';
import { locale } from 'devextreme/localization';

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.scss']
})
export class DateBoxComponent implements OnInit {

  //region Declare

  @ViewChild(DxDateBoxComponent) dateBoxInput!: DxDateBoxComponent;

  @Input() dateBoxName: string = '';

  @Input() dateBoxLabel: string = '';

  @Input() inputPlaceholder: string = '';
  
  @Input() inputHeight: string = '40px';

  @Output() onValueChanged = new EventEmitter<any>();

  //endregion


  //region Constructor
  constructor() { }
  //endregion

  //region Methods

  ngOnInit(): void {
    locale("vi-VN");
  }

  /**
   * Phương thức xử lý sự kiện khi giá trị thay đổi
   * CreatedBy: PHDUONG(04/10/2021)
   */
  changeValue(data: any): void {
    this.onValueChanged.emit({
      inputName: this.dateBoxName,
      inputValue: data.value
    })
  }

  /**
   * Hàm đặt lại Input
   * CreatedBy: PHDUONG(04/10/2021)
   */
  resetInput() {
    this.dateBoxInput.instance.reset();
  }

  //endregion

}
