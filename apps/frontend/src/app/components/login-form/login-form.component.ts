import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import * as Actions from '../../store/actions';

@Component({
  selector: 'ks-work-schedule-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  constructor(private store: Store<State>) { }

  username: string;
  password: string;

  get emptyUsername() {
    return !this.username || this.username.length < 1;
  }

  get emptyPassword() {
    return !this.password || this.password.length < 1;
  }

  get buttonDisabled() {
    return this.emptyUsername || this.emptyPassword;
  }

  loginUser() {
    this.store.dispatch(Actions.loginUser({ username: this.username, password: this.password }))
  }
}
