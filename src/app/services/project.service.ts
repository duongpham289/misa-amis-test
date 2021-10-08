import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from '../shared/models/project';
import { ProjectUser } from '../shared/models/project-user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  private projectsUrl = 'https://localhost:44385/api/v1/projects';

  getProjectByUserId(id: string): Observable<Project[]> {
    
    const projectsUrl = `${this.projectsUrl}/${id}`;

    return this.http.get<Project[]>(projectsUrl).pipe(
      catchError(this.handleError<Project[]>('getProjectByUserId', []))
    );
  }
  

   /**
   * Thêm mới phòng ban
   * @param id TaskId
   * @returns 
   */
    addProject(project: Project): Observable<string> {    
      return this.http.post<string>(this.projectsUrl, project, this.httpOptions).pipe(
        catchError(this.handleError<string>('addProject' ))
      );
  
    }

   /**
   * Thêm mới phòng ban
   * @param id TaskId
   * @returns 
   */
    addProjectUser(projectUser: ProjectUser): Observable<ProjectUser> { 

      const projectsUrl = `${this.projectsUrl}/addProjectUser`;

      return this.http.post<ProjectUser>(projectsUrl, projectUser, this.httpOptions).pipe(
        catchError(this.handleError<ProjectUser>('addProjectUser', projectUser))
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
