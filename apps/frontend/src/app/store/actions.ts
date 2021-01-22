import { User } from '@ks-work-schedule/models';
import { createAction, props } from '@ngrx/store';

export const loginUser = createAction('@app/loginUser', props<{ username: string, password: string }>());
export const loginUserError = createAction('@app/loginUserError');
export const loginUserSuccess = createAction('@app/loginUserSuccess', props<{ accessToken: string }>());

export const logoutUser = createAction('@app/logoutUser');

export const getUserProfile = createAction('@app/getUserProfile');
export const getUserProfileSuccess = createAction('@app/getUserProfileSuccess', props<{ userProfile: User }>());
