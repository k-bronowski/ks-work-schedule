import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiClientService } from '../services/api-client.service';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import * as AppActions from './actions';

@Injectable()
export class Effects {

  constructor(
    private actions$: Actions,
    private apiClient: ApiClientService
  ) { }

  loginUserEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.loginUser),
    switchMap(({ username, password }) => this.apiClient.loginUser(username, password)),
    map(({ loginSuccess, accessToken }) => loginSuccess ? AppActions.loginUserSuccess({ accessToken }) : AppActions.loginUserError())
  ));

  getUserProfileEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.getUserProfile),
    switchMap(() => this.apiClient.getUserProfile()),
    map(userProfile => AppActions.getUserProfileSuccess({ userProfile }))
  ));

}
