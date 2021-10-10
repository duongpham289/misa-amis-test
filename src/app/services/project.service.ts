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
  //region Declare

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private projectsUrl = 'https://localhost:44385/api/v1/projects';
  //endregion

  //region Constructor
  constructor(private http: HttpClient) { }
  //endregion

  //region Methods

  /**
   * Lấy dữ liệu dự án qua id của dự án
   * @param projectId project id
   * @returns Dữ liệu dự án
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getById(projectId: string): Observable<Project> {

    const projectsUrl = `${this.projectsUrl}/${projectId}`;

    return this.http.get<Project>(projectsUrl).pipe(
      catchError(this.handleError<Project>('getProjectById'))
    );
  }

  /**
   * lấy dữ liệu dự án qua Id người dùng
   * @param userId id của người dùng
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getProjectByUserId(userId: string): Observable<Project[]> {

    const projectsUrl = `${this.projectsUrl}/getByUserId/${userId}`;

    return this.http.get<Project[]>(projectsUrl).pipe(
      catchError(this.handleError<Project[]>('getProjectByUserId', []))
    );
  }


  /**
  * Thêm mới dự án
  * @param project Thông tin dự án
  * @returns 
  * CreatedBy: PHDUONG(06/10/2021)
  */
  addProject(project: Project): Observable<string> {
    return this.http.post<string>(this.projectsUrl, project, this.httpOptions).pipe(
      catchError(this.handleError<string>('addProject'))
    );

  }

  /**
  * Thêm mới ProjertUser
  * @param projectUser projectUser
  * @returns 
  * CreatedBy: PHDUONG(06/10/2021)
  */
  addProjectUser(projectUser: ProjectUser): Observable<ProjectUser> {

    const projectsUrl = `${this.projectsUrl}/addProjectUser`;

    return this.http.post<ProjectUser>(projectsUrl, projectUser, this.httpOptions).pipe(
      catchError(this.handleError<ProjectUser>('addProjectUser', projectUser))
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
