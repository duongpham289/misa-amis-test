import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import POPUP_ENUM from 'src/app/shared/resources/popup-resources';

@Component({
  selector: 'app-popup-department',
  templateUrl: './popup-department.component.html',
  styleUrls: ['./popup-department.component.scss']
})
export class PopupDepartmentComponent implements OnInit {

  popupDepartmentVar: any;


  constructor() { 
    this.popupDepartmentVar = POPUP_ENUM
  }

  ngOnInit(): void {
  } 

}
