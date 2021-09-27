import { Component, OnInit } from '@angular/core';
import POPUP_ENUM from 'src/app/shared/resources/popup-resources';

@Component({
  selector: 'app-popup-project',
  templateUrl: './popup-project.component.html',
  styleUrls: ['./popup-project.component.scss']
})
export class PopupProjectComponent implements OnInit {

  popupProjectVar: any;
  
  constructor() { 
    this.popupProjectVar = POPUP_ENUM
  }

  ngOnInit(): void {
  }

}
