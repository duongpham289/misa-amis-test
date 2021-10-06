import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export interface User {
  FullName: string;
  EmployeeCode: string;
  EndDate: Date;
  AssigneeName: string;
  Mobile: string;
  Email: string;
  Avatar: string;
  AvatarColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private usersUrl = 'https://localhost:44357/api/v1/users';
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );

  }
  getUserByName(name: string): Observable<User[]> {

    const usersUrl = `${this.usersUrl}/getUserByName?username=${name}`;
    return this.http.get<User[]>(usersUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );

  }

  getUserById(id: string): Observable<User> {

    const usersUrl = `${this.usersUrl}/${id}`;
    return this.http.get<User>(usersUrl).pipe(
      catchError(this.handleError<User>('getUsers'))
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
