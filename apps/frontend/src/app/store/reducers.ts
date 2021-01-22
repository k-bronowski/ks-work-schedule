import { createReducer, Action, on } from '@ngrx/store';
import { State } from './state';
import * as Actions from './actions';

const initialState: State = {
  accessToken: null,
  userProfile: null,
  loginUser: false,
  loginUserError: false
}

const reducer = createReducer(
  initialState,

  on(
    Actions.loginUser,
    state => ({ ...state, loginUser: true, loginUserError: false, accessToken: null, userProfile: null })
  ),

  on(
    Actions.loginUserSuccess,
    (state, { accessToken }) => ({ ...state, loginUser: false, accessToken })
  ),

  on(
    Actions.loginUserError,
    (state) => ({ ...state, loginUser: false, loginUserError: true })
  )
)

export function appReducer(state: State, action: Action) {
  const _reducer = reducer;

  return _reducer(state, action);
}
