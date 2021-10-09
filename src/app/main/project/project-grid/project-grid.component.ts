import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GRID_CONSTANTS } from 'src/app/shared/constants/grid';
import { ICON_SIZES } from 'src/app/shared/enum/icon-size';
import { doughnutItem } from 'src/app/shared/interfaces/doughtnut';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {
  @Input() gridData: any;
  @Input() taskColumns: any;

  @Output() openTaskEdit = new EventEmitter<any>();

  popupVisible: boolean = false;
  gridConst: any;

  
  toastVisible: boolean = false;
  type: string = "info";
  toastMessage: string = '';
  
  constructor() {
    this.gridConst = GRID_CONSTANTS;
  }
  
  ngOnInit(): void {
  }

  /**
   * Phương thức lấy id của các hàng
   * @param data
 * CreatedBy: PHDUONG(29/09/2021)
   */
  getRowId(data: any) {
    return data.row.rowIndex + 1;
  }

  /**
   * Phương thức lấy dữ liệu để hiển thị lên bảng
   * @param data
 * CreatedBy: PHDUONG(29/09/2021)
   */
  getData(data: any) {
    const columnIndex = data.columnIndex;
    return data.row.cells[columnIndex].text;
  }

  /**
   * Phương thức hiển thị trạng thái công việc tương ứng
   * @param data
 * CreatedBy: PHDUONG(29/09/2021)
   */
  getDataStatus(data: any) {
    const columnIndex = data.columnIndex;
    const cellValue = parseInt(data.row.cells[columnIndex].text);
    if (cellValue >= 100) {
      return this.gridConst.TaskStatusFinishing;
    } else if (cellValue <= 0) {
      return this.gridConst.TaskStatusUnfinished;
    }
    return `${this.gridConst.TaskStatusFinishing} ${cellValue}%`;
  }

  /**
   * Phương thức kiểm tra công việc đã hoàn thành chưa
   * CreatedBy: PHDUONG(29/09/2021)
   */
  checkFinished(data: any) {
    const columnIndex = data.columnIndex;
    const cellValue = parseInt(data.row.cells[columnIndex].text);
    return cellValue >= 100;
  }

  /**
   * Phương thức mở popup modal khi nhấn vào ô tương ứng
   * @param data
   * CreatedBy: PHDUONG(29/09/2021)
   */
  openModal(data: any) {
    this.openTaskEdit.emit(data);
  }

  /**
   * Phương thức trả về kích cỡ biểu đồ tròn
   * CreatedBy: PHDUONG(29/09/2021)
   */
  getDoughnutSize() {
    return {
      width: ICON_SIZES.IconSizeDefault,
      height: ICON_SIZES.IconSizeDefault
    }
  }

  /**
   * Phương thức trả về dữ liệu render lên biểu đồ tròn
   * @param data
   * CreatedBy: PHDUONG(29/09/2021)
   */
  getDoughnutData(data: any) {
    let doughnutData: doughnutItem[];
    doughnutData = [
      {
        region: 'finishedTask',
        val: data.value
      },
      {
        region: 'unfinishedTask',
        val: 100 - data.value
      }
    ]
    return doughnutData;
  }

  funcNotAvailable() {
    this.toastMessage = "Chức năng trong giai đoạn phát triển";
    this.type = "custom";
    this.toastVisible = true;
  }

}
