import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  //region Declare
  @Input() buttonText: string = '';
  //endregion
  
  constructor() { }

  ngOnInit(): void { }

}
