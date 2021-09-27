import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private _popupVisibleSource = new Subject<boolean>();
  popupVisible$ = this._popupVisibleSource.asObservable();

  private _popupModeSource = new Subject<number>();
  popupMode$ = this._popupModeSource.asObservable();

  constructor() {
  }

  /**
   * Phương thức đặt chế độ của popup modal
   * @param mode (0 - phòng ban, 1 - dự án, 2 - công việc)
   * @param visible
   * Created: PHDUONG (27/09/2021)
   */
  setPopupMode(mode: number = 0, visible: boolean) {
    this._popupModeSource.next(mode);
    this._popupVisibleSource.next(visible);
  }
}
