import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { Task, TaskService } from 'src/app/services/task.service';
import { GRID_CONSTANTS } from 'src/app/shared/constants/grid';
import { ICON_SIZES } from 'src/app/shared/enum/icon-size';
import { doughnutItem } from 'src/app/shared/interfaces/doughtnut';
import { TaskColumns } from 'src/app/shared/models/task-columns';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // tasks: Task[] = []
  taskColumns: any;
  popupVisible: boolean | undefined;
  gridConst: any;
  tasksData: any;

  constructor(taskService: TaskService,private mock_service: MockDataService) {
    this.tasksData = mock_service.getCustomers();
    // this.tasks = taskService.getTasks();
    this.taskColumns = TaskColumns;
    this.gridConst = GRID_CONSTANTS;
   }

   /**
   * Phương thức lấy id của các cột
   * @param index
   * @param column
   * Author: NQMinh (24/09/2021)
   */
  getColumnId(index: number, column: any) {
    return column['ColID'];
  }
  
  /**
   * Phương thức lấy id của các hàng
   * @param data
   * Author: NQMinh (25/09/2021)
   */
   getRowId(data: any) {
    return data.row.rowIndex + 1;
  }

  /**
   * Phương thức lấy dữ liệu để hiển thị lên bảng
   * @param data
   * Author: NQMinh (26/09/2021)
   */
  getData(data: any) {
    //console.log(data)
    const columnIndex = data.columnIndex;
    return data.row.cells[columnIndex].text;
  }

  /**
   * Phương thức hiển thị trạng thái công việc tương ứng
   * @param data
   * Author: NQMinh (26/09/2021)
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
   * Author: NQMinh
   */
  checkFinished(data: any) {
    const columnIndex = data.columnIndex;
    const cellValue = parseInt(data.row.cells[columnIndex].text);
    return cellValue >= 100;
  }

  /**
   * Phương thức mở popup modal khi nhấn vào ô tương ứng
   * @param data
   * Author: NQMinh (26/09/2021)
   */
  openModal(data: any) {
    this.popupVisible = true;
  }

  /**
   * Phương thức trả về kích cỡ biểu đồ tròn
   * Author: NQMinh (26/09/2021)
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
   * Author: NQMinh (26/09/2021)
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

  ngOnInit(): void {
  }

}
