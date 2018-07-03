import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

users = USERS;

selectedUser: User;

onSelect(user: User): void {
  this.selectedUser = user;
}

  constructor() { }

  ngOnInit() {
  }

}
