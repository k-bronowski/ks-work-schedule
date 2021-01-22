import { MemoizedSelector, createFeatureSelector, createSelector, props } from '@ngrx/store';
import { State } from './state';
import { unbox } from 'ngrx-forms';
import { state } from '@angular/animations';

const appState$: MemoizedSelector<any, State> = createFeatureSelector('app');

export const accessToken$ = createSelector(appState$, state => state.accessToken);
export const unauthorized$ = createSelector(appState$, state => state.unauthorized);
export const isUserLogged$ = createSelector(accessToken$, at => !!at);
export const userProfile$ = createSelector(appState$, state => state.userProfile);
