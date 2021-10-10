import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //region Declare

  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0";

  currentUser = <User>{};

  private usersUrl = 'https://localhost:44385/api/v1/users';
  //endregion

  //region Constructor
  constructor(private http: HttpClient) { }
  //endregion

  //region Methods

  /**
   * Lấy tất cả thông tin người dùng
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /**
   * Lấy thông tin người dùng filter qua tên
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getUserByName(name: string): Observable<User[]> {

    const usersUrl = `${this.usersUrl}/getUserByName?username=${name}`;
    return this.http.get<User[]>(usersUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );

  }


  /**
   * Lấy thông tin người dùng bằng userId
   * @param userId 
   * @returns 
   * CreatedBy: PHDUONG(06/10/2021)
   */
  getUserById(userId: string): Observable<User> {

    const usersUrl = `${this.usersUrl}/${userId}`;
    return this.http.get<User>(usersUrl).pipe(
      catchError(this.handleError<User>('getUsers'))
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
