import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-twentyday-dash',
  templateUrl: './twentyday-dash.component.html',
  styleUrls: ['./twentyday-dash.component.css']
})
export class TwentydayDashComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }

  getColor(id) {
  switch (id) {
    case 1:
      return 'green';
    case 2:
      return 'blue';
    case 3:
      return 'red';
  }
}
}
