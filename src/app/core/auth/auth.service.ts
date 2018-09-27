import {Injectable} from '@angular/core';
import {UserCredentials} from './entity/user-credentials';
import {Observable, of} from 'rxjs';
import {User} from './entity/user';
import {UserDto} from './entity/userDto';
import {map, tap} from 'rxjs/operators';
import {UserStore} from '../storage/user-store';

const userDto = {
  firstName: 'Vasya',
  lastName: 'Vasiliich',
  token: 'true    '
};

@Injectable()
export class AuthService {

  constructor(private userStore: UserStore) {

  }

  login(creds: UserCredentials): Observable<User> {
    return of(userDto).pipe(
      map((response: UserDto) => new User(
        response.firstName,
        response.lastName,
        response.token
      )),
      tap((user: User) => this.userStore.update(user))
    );
  }
}
