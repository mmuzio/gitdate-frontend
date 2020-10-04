import { ActionReducer } from '@ngrx/store';

import { AppState } from '../core.state';

/**
 * debug is a meta reducer. It takes a reducer as input and
 * logs old state and new state to the console
 * @param reducer The ActionReducer
 */
export function debug(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state, action) {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (<any>action).payload,
      oldState: state,
      newState
    });
    return newState;
  };
}
