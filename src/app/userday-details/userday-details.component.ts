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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    var $ = require('jquery');
    this.getUser();
//    this.changeDayStyle(this.user.completed);
  this.test();

  $('#grid-container').on('pageinit', function() {

});
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  test(): void {
    document.getElementById('head').classList.add("completed");
  }

/*  changeDayStyle(array: string[]): void {
    console.log(array);
    for(let strNum of array){
      document.getElementById(strNum).classList.add("completed");
    }
  } */

}
