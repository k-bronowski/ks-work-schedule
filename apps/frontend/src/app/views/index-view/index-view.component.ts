import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import * as Selectors from '../../store/selectors';
import * as Actions from '../../store/actions';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css']
})
export class IndexViewComponent {

  userProfile$ = this.store.select(Selectors.userProfile$);
  userFullName$ = this.userProfile$.pipe(map(up => `${up.firstName} ${up.lastName}`));
  userInitials$ = this.userProfile$.pipe(map(up => `${up.firstName.charAt(0)}${up.lastName.charAt(0)}`.toUpperCase()));

  constructor(private store: Store<State>, private router: Router, private userdtaService: UserDataService) { }

  logout() {
    this.store.dispatch(Actions.logoutUser());
    this.userdtaService.removeAuthToken();
    setTimeout(() => {
      this.router.navigate(['/', 'login']);
    }, 0);

  }

}
