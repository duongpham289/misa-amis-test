import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export interface Department {
  DepartmentId: number;
  DepartmentName: string;
  ListProjects: Project[];
}
export interface Project {
  ProjectId: number;
  ProjectName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }

  private departmentsUrl = 'https://localhost:44357/api/v1/departments';

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl).pipe(
      catchError(this.handleError<Department[]>('getDepartments', []))
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