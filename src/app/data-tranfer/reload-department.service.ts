import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DepartmentService } from '../services/department.service';
import { UserService } from '../services/user.service';
import { Department } from '../shared/models/department';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ReloadDepartmentService {
  
  private customSubject = new Subject<any>();
  customObservable = this.customSubject.asObservable();

  constructor() { 

  }

  callComponentMethod() {
    this.customSubject.next();
  }
}
