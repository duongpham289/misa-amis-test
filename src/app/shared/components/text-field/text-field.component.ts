import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() inputLabel: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() isRequired: boolean = false;
  @Input() textFieldHeight: string = '40px';
  constructor() { }

  ngOnInit(): void {
  }

}
