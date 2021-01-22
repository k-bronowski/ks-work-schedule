import { createReducer, Action, on } from '@ngrx/store';
import { State } from './state';
import * as Actions from './actions';

const initialState: State = {
  accessToken: null,
  userProfile: null,
  loginUser: false,
  unauthorized: false
}

const reducer = createReducer(
  initialState,

  on(
    Actions.loginUser,
    state => ({ ...state, loginUser: true, unauthorized: false, accessToken: null, userProfile: null })
  ),

  on(
    Actions.loginUserSuccess,
    (state, { accessToken }) => ({ ...state, loginUser: false, accessToken, unauthorized: false })
  ),

  on(
    Actions.loginUserError,
    (state) => ({ ...state, loginUser: false, unauthorized: true })
  ),

  on(
    Actions.getUserProfile,
    (state) => ({ ...state, userProfile: null })
  ),

  on(
    Actions.getUserProfileSuccess,
    (state, { userProfile }) => ({ ...state, userProfile })
  )
)

export function appReducer(state: State, action: Action) {
  const _reducer = reducer;

  return _reducer(state, action);
}
