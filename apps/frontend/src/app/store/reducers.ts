import { createReducer, Action } from '@ngrx/store';
import { State } from './state';

const initialState: State = {
  authToken: null,
  userProfile: null
}

const reducer = createReducer(
  initialState
)

export function appReducer(state: State, action: Action) {
  const _reducer = reducer;

  return _reducer(state, action);
}
