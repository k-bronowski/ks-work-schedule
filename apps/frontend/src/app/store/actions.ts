import { createAction, props } from '@ngrx/store';

export const loginUser = createAction('@app/loginUser', props<{ username: string, password: string }>());
export const loginUserError = createAction('@app/loginUserError');
export const loginUserSuccess = createAction('@app/loginUserSuccess', props<{ accessToken: string }>())
