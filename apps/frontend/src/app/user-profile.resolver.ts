import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { State } from './store/state';
import { getUserProfile } from './store/actions';
import * as Selectors from './store/selectors';
import { User } from '@ks-work-schedule/models';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<User> {

  constructor(private store: Store<State>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    this.store.dispatch(getUserProfile());
    return this.store.select(Selectors.userProfile$).pipe(filter(x => !!x), first());
  }
}
