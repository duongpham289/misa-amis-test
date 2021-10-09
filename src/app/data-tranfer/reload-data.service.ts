import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadDataService {
  
  private reloadSubject = new Subject<any>();

  reloadDepartment = this.reloadSubject.asObservable();
  reloadProject = this.reloadSubject.asObservable();
  reloadTask = this.reloadSubject.asObservable();

  constructor() { 

  }

  reloadDepartmentData() {
    this.reloadSubject.next();
  }

  reloadTaskData() {
    this.reloadSubject.next();
  }

  reloadProjectData() {
    this.reloadSubject.next();
  }
}
