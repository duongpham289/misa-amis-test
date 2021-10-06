import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import popupResources from 'src/app/shared/resources/popup-resources';
import { PopupService } from 'src/app/shared/services/popup-service';

@Component({
  selector: 'app-popup-task',
  templateUrl: './popup-task.component.html',
  styleUrls: ['./popup-task.component.scss']
})
export class PopupTaskComponent implements OnInit {
  
  @Input() popupWidth: number = 0;
  @Input() popupTitle: string = '';
  @Input() popupVisible = false;
  @Output() popupClose = new EventEmitter<boolean>();
  popupTaskVar: any;
  
  constructor(private _popupService: PopupService) { 
    this.popupTaskVar = popupResources
  }

  /**
   * Phương thức call service để đóng popup
   * CreatedBy: PHDUONG (27/09/2021)
   */
  closePopup() {
    this.popupClose.emit(false);
  }
  
  ngOnInit(): void {
  }

}
