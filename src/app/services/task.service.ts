import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export interface Task {
  TaskId: number;
  TaskName: string;
  Process: number;
  EndDate: Date;
  AssigneeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  private tasksUrl = 'https://localhost:44357/api/v1/tasks/getByProjectId';

  getTasks(id: number): Observable<Task[]> {
    const tasksUrl = `${this.tasksUrl}/${id}`;
    return this.http.get<Task[]>(tasksUrl).pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
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