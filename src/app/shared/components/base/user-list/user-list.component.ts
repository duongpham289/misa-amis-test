import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from "../../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //region Declare

  @Input() userList: User[] = [];
  //endregion

  constructor() {
  }

  ngOnInit(): void { }

}
