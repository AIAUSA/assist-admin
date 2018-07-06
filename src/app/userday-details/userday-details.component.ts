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

  test(): void {
    document.getElementById('head').classList.add("completed");
  }


  changeDayStyle(num): void {
    var result =0;
    var array = this.user.completed
    for(let str of array){

      if(str === "one") {
                result += 1;
            }
            else if(str === "two") {
                result += 2;
            }
            else if(str === "three") {
                result += 3;
            }
            else if(str === "four") {
                result += 4;
            }
            else if(str === "five") {
                result += 5;
            }
            else if(str === "six") {
                result += 6;
            }
            else if(str === "seven") {
                result += 7;
            }
            else if(str === "eight") {
                result += 8;
            }
            else if(str === "nine") {
                result += 9;
            }
            else if(str === "ten") {
                result += 10;
                result=0;
                if(num === result){
                  console.log('theyre equal!!');
                  this.getColor(num);
                  result=0;
                }
            }
            else if(str === "eleven") {
                result += 11;
            }
            else if(str === "twelve") {
                result += 12;
            }
            else if(str === "thirteen") {
                result += 13;
            }
            else if(str === "fourteen") {
                result += 14;
            }
            else if(str === "fifteen") {
                result += 15;
            }
            else if(str === "sixteen") {
                result += 16;
            }
            else if(str === "seventeen") {
                result += 17;
            }
            else if(str === "eighteen") {
                result += 18;
            }
            else if(str === "nineteen") {
                result += 19;
            }
            else if(str === "twenty") {
                result += 20;
            }
//        this.getColor(result);

    }
  }



/*  changeDayStyle(array: string[]): void {
    console.log(array);
    for(let strNum of array){
        this.getColor(array.length);
    }
  } */

  getColor(day) {
    console.log(day);

    var result =0;
    var array = this.user.completed
    console.log(array);
    for(let str of array){

      if(str === "one") {
                result += 1;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "two") {
                result += 2;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "three") {
                result += 3;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "four") {
                result += 4;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "five") {
                result += 5;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "six") {
                result += 6;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "seven") {
                result += 7;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "eight") {
                result += 8;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "nine") {
                result += 9;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "ten") {
                              console.log('result is '+ result);
                result += 10;
                console.log('result is '+ result);
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "eleven") {
                result += 11;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "twelve") {
                result += 12;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "thirteen") {
                result += 13;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "fourteen") {
                result += 14;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "fifteen") {
                result += 15;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "sixteen") {
                result += 16;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "seventeen") {
                result += 17;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "eighteen") {
                result += 18;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "nineteen") {
                result += 19;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
            else if(str === "twenty") {
                result += 20;
                if(day === result){
                  result=0;
                  return 'red';
                }
                else{
                  result=0;
                }
            }
//        this.getColor(result);

    }



}

}
