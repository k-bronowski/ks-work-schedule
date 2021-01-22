import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { State } from './store/state';
import { getUserProfile } from './store/actions';
import * as Selectors from './store/selectors';
import { Store } from '@ngrx/store';
import { UserDataService } from './services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AccesTokenResolver implements Resolve<boolean> {

  constructor(
    private userDataService: UserDataService,
    private store: Store<State>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const accessToken = this.userDataService.restoreAuthToken();
    console.log('accessToken', accessToken);

    return of(true);
  }
}
