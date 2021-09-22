import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  currentTemplate: string = 'project';
  
  @Input() isPopupOpen = false;
  
  @Output() isPopupClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopup(){
    this.isPopupClose.emit(false);
    // this.isPopupOpen = false
  }

}