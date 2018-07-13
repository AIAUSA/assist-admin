import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User }         from '../user';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-userday-details',
  templateUrl: './userday-details.component.html',
  styleUrls: ['./userday-details.component.css']
})
export class UserdayDetailsComponent implements OnInit {
  @Input() user: User;

  days = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  getClass(num): string {
    if (this.user.completed.includes(this.days[num])) return "completed";
    return "";
  }
  getTotal(): number { //only needed if total is not a property of user 
    return this.user.completed.length;
  }
}
