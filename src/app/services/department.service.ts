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

  //region Declare

  departments: Department[] = [];

  departmentOptionsForProjectPopup: Department[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private departmentsUrl = 'https://localhost:44385/api/v1/departments';
  //endregion

  //region Constructor
  constructor(private http: HttpClient) { }
  //endregion

  //region Methods

  /**
   * Lấy dữ liệu phòng ban theo UserId
   * @param id userId
   * @returns dữ liệu phòng ban dạng Department[]
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getDepartmentByUserId(id: string): Observable<Department[]> {

    const departmentsUrl = `${this.departmentsUrl}/getByUserId/${id}`;

    return this.http.get<Department[]>(departmentsUrl).pipe(
      catchError(this.handleError<Department[]>('getDepartmentByUserId', []))
    );
  }

  /**
   * Thêm mới phòng ban
   * @param department dữ liệu phòng ban cần thêm mới
   * @returns id phòng ban vừa thêm
   * CreatedBy: PHDUONG(06/10/2021)
   */
  addDepartment(department: Department): Observable<string> {
    return this.http.post<string>(this.departmentsUrl, department, this.httpOptions).pipe(
      catchError(this.handleError<string>('addDepartment'))
    );
  }

  /**
   * Thêm mới DepartmentUser
   * @param departmentUser dữ liệu departmnentUser
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  addDepartmentUser(departmentUser: DepartmentUser): Observable<DepartmentUser> {

    const departmentsUrl = `${this.departmentsUrl}/addDepartmentUser`;

    return this.http.post<DepartmentUser>(departmentsUrl, departmentUser, this.httpOptions).pipe(
      catchError(this.handleError<DepartmentUser>('addDepartmentUser', departmentUser))
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