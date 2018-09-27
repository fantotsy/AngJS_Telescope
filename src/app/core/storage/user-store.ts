import {Store} from './store';
import {User} from '../auth/entity/user';
import {Injectable} from '@angular/core';

@Injectable()
export class UserStore extends Store<User> {
  constructor() {
    super(new User());
  }

  hasUser(): boolean {
    return !!this.get().token;
  }
}
