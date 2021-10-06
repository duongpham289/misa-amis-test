import { Component, OnInit } from '@angular/core';
import { UserService, User } from "../../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  userId: string = "6827e1c0-5b98-6d19-831b-27d9d367aeb0"

  constructor(private userService: UserService) {
    this.userService.getUserById(this.userId).subscribe(users => this.userList.push(users));
  }

  ngOnInit(): void {
  }

}
