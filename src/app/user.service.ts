import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({ providedIn: 'root' })
export class UserService {


  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    return of(USERS.find(user => user.id === id));
  }
}
