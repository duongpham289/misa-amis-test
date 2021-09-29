import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('name') focusInput!: DxTextBoxComponent;


  @Input() inputLabel!: string;
  @Input() inputPlaceholder!: string;
  @Input() isRequired: boolean = false;
  @Input() textFieldHeight: string = '40px';
  @Input() textArea!: boolean;

  constructor() { }
  ngAfterViewInit(): void {
  }


  setFocus() {
    this.focusInput.instance.focus();
  }

  ngOnInit(): void {
  }

}
