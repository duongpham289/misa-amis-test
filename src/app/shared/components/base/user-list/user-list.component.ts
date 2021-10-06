import { Component, Input, OnInit } from '@angular/core';
import { UserService, User } from "../../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  @Input() userList: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
