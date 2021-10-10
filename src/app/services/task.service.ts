import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //region Declare
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private tasksUrl = 'https://localhost:44385/api/v1/tasks';
  //endregion

  //region Constuctor
  constructor(private http: HttpClient) { }
  //endregion

  //region Methods

  /**
   * Lấy dữ liệu công việc dựa trên Project Id
   * @param projectId ProjectId
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getTasksByProjectId(projectId: string): Observable<Task[]> {
    const getTasksByProjectIdUrl = `${this.tasksUrl}/getByProjectId/${projectId}`;
    return this.http.get<Task[]>(getTasksByProjectIdUrl).pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
    );

  }

  /**
   * Thêm mới công việc
   * @param task Công việc
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  addTask(task: Task): Observable<any> {
    return this.http.post<any>(this.tasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('addTask', task))
    );

  }

  /**
   *  Sửa công việc
   * @param task Công việc
   * @param taskId id công việc
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  updateTask(task: Task, taskId: string): Observable<any> {

    const updateTasksUrl = `${this.tasksUrl}/${taskId}`;

    return this.http.put<any>(updateTasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('addTask', task))
    );

  }

  /**
   * Xử lí lỗi.
   * @param operation - tên của hàm sinh ra lỗi
   * @param result - giá trị tùy chọn để trả về dưới dạng kết quả observable
   * CreatedBy: PHDUONG(06/10/2021)
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: gửi lỗi đến cơ sở hạ tầng ghi log từ xa

      // Cho phép ứng dụng tiếp tục chạy bằng cách trả về một kết quả trống.
      return of(result as T);
    };
  }
  //endregion
}