import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Department } from '../shared/models/department';
import { DepartmentUser } from '../shared/models/department-user';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  private departmentsUrl = 'https://localhost:44385/api/v1/departments';

  getDepartmentByUserId(id: string): Observable<Department[]> {
    
    const departmentsUrl = `${this.departmentsUrl}/getByUserId/${id}`;

    return this.http.get<Department[]>(departmentsUrl).pipe(
      catchError(this.handleError<Department[]>('getDepartmentByUserId', []))
    );
  }

   /**
   * Thêm mới phòng ban
   * @param id TaskId
   * @returns 
   */
    addDepartment(department: Department): Observable<string> {    
      return this.http.post<string>(this.departmentsUrl, department, this.httpOptions).pipe(
        catchError(this.handleError<string>('addDepartment' ))
      );
  
    }

   /**
   * Thêm mới phòng ban
   * @param id TaskId
   * @returns 
   */
    addDepartmentUser(departmentUser: DepartmentUser): Observable<DepartmentUser> { 

      const departmentsUrl = `${this.departmentsUrl}/addDepartmentUser`;

      return this.http.post<DepartmentUser>(departmentsUrl, departmentUser, this.httpOptions).pipe(
        catchError(this.handleError<DepartmentUser>('addDepartmentUser', departmentUser))
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

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}