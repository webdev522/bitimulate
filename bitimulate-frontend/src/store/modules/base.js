import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action types
const SET_SCREEN_MASK_VISIBILITY = 'domain/SET_SCREEN_MASK_VISIBILITY';

// action creator
export const setScreenMaskVisibility = createAction(SET_SCREEN_MASK_VISIBILITY);

// initial state
const initialState = Map({
  screenMask: Map({
    visible: false
  })
});

// reducer
export default handleActions({
  [SET_SCREEN_MASK_VISIBILITY]: (state, action) => {
    return state.setIn(['screenMask', 'visible'], action.payload);
  }
}, initialState);