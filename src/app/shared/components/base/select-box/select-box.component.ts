import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  //region Declare

  @ViewChild(DxSelectBoxComponent) selectBoxInput!: DxSelectBoxComponent;

  @Input() selectBoxName: string = '';
  @Input() selectBoxLabel: string = '';

  @Input() inputPlaceholder: string = '';
  @Input() inputHeight: string = '40px';
  @Input() isRequired: boolean = false;

  @Input() selectBoxData?: any;
  @Input() selectBoxValueExpression: string = '';
  @Input() selectBoxDisplayExpression: string = '';
  @Output() onSelected = new EventEmitter<any>();

  //endregion

  constructor() { }

  //region Methods

  ngOnInit(): void { }

  /**
   * Phương thức xử lý sự kiện khi người dùng chọn các lựa chọn của dropdown
   * @param data
   * CreatedBy: PHDUONG(04/10/2021)
   */
  changeValue(data: any): void {
    this.onSelected.emit({
      inputName: this.selectBoxName,
      inputValue: data.value,
      inputDisplayName: data.component.option("displayExpr"),
      inputDisplayValue: data.component.option("text")
    })
  }

  /**
  * Hàm đặt lại Input
  * CreatedBy: PHDUONG(04/10/2021)
  */
  resetInput() {
    this.selectBoxInput.instance.reset();
  }

  //endregion
}
