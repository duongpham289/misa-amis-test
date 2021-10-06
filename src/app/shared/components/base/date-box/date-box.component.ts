import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { locale } from 'devextreme/localization';

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.scss']
})
export class DateBoxComponent implements OnInit {
  @Input() dateBoxName: string = '';
  @Input() dateBoxLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';

  @Output() onValueChanged= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    locale("vi-VN");
  }

  /**
   * Phương thức xử lý sự kiện khi giá trị thay đổi
   * Author: NQMinh (03/10/2021)
   */
  changeValue(data: any): void {
    this.onValueChanged.emit({
      inputName: this.dateBoxName,
      inputValue: data.value
    })
  }

}
