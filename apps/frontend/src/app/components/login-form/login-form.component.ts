import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import * as Actions from '../../store/actions';
import * as Selectors from '../../store/selectors';
import { Subscription } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'ks-work-schedule-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnDestroy {

  constructor(private store: Store<State>, private router: Router) { }

  username: string;
  password: string;
  private subscription = Subscription.EMPTY;

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
    this.subscription.unsubscribe();
    this.store.dispatch(Actions.loginUser({ username: this.username, password: this.password }));
    setTimeout(() => {
      this.store.select(Selectors.isUserLogged$).pipe(
        filter(at => at),
        first()).subscribe(() => this.router.navigate(['/']))
    }, 0);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
