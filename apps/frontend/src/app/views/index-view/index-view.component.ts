import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import * as Selectors from '../../store/selectors';
import * as Actions from '../../store/actions';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css']
})
export class IndexViewComponent implements OnInit {

  userProfile$ = this.store.select(Selectors.userProfile$);

  constructor(private store: Store<State>, private router: Router, private userdtaService: UserDataService) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(Actions.logoutUser());
    this.userdtaService.removeAuthToken();
    setTimeout(() => {
      this.router.navigate(['/', 'login']);
    }, 0);

  }

}
