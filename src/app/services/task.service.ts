import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  private tasksUrl = 'https://localhost:44385/api/v1/tasks';


  /**
   * Lấy dữ liệu công việc dựa trên Project Id
   * @param id ProjectId
   * @returns 
   */
  getTasks(id: number): Observable<Task[]> {
    const tasksUrl = `${this.tasksUrl}/getByProjectId/${id}`;
    return this.http.get<Task[]>(tasksUrl).pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
    );

  }

  /**
   * Thêm mới công việc
   * @param task Công việc
   * @returns 
   */
  addTask(task: Task): Observable<Task> {    
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<Task>('addTask', task))
    );

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}