import {Component, OnInit} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {Observable} from 'rxjs';
import {User} from '../../../core/auth/entity/user';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  $user: Observable<User>;

  constructor(private userStore: UserStore) {
  }

  ngOnInit() {
    this.$user = this.userStore.$get();
  }

}
