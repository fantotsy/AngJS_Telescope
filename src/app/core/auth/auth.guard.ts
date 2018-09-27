import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserStore} from '../storage/user-store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userStore: UserStore,
    private router: Router,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userStore.hasUser()) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
