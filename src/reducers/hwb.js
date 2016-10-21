import { Map, List, fromJS } from 'immutable';
import {
  SET_ORIGIN,
  SET_ADJUST,
  SET_ORIGIN_HUE,
  SET_ADJUST_HUE,
  ADD_HUE,
  MINUS_HUE,
  ADD_WHITE,
  MINUS_WHITE,
  ADD_BLACK,
  MINUS_BLACK,
  PICK_COLOR,
  DELETE_COLOR,
  LOCATION_SYNC,
 } from '../actions/hwb';
import { syncPickedWithUrl } from '../lib/color';

const initialState = Map({
  origin: List([0, 0, 0]),
  adjust: List([0, 0, 0]),
  picked: List([]),
});

function hwb(state = initialState, action) {
  switch (action.type) {
    case SET_ORIGIN:
      return state.setIn(['origin'], List(action.hwb));
    case SET_ADJUST:
      return state.setIn(['adjust'], List(action.hwb));
    case SET_ORIGIN_HUE:
      return state.setIn(['origin', 0], action.hue);
    case SET_ADJUST_HUE:
      return state.setIn(['adjust', 0], action.hue);
    case ADD_HUE:
      return state.updateIn(['adjust', 0], v => v + 1);
    case MINUS_HUE:
      return state.updateIn(['adjust', 0], v => v - 1);
    case ADD_WHITE:
      return state.updateIn(['adjust', 1], v => v + 1);
    case MINUS_WHITE:
      return state.updateIn(['adjust', 1], v => v - 1);
    case ADD_BLACK:
      return state.updateIn(['adjust', 2], v => v + 1);
    case MINUS_BLACK:
      return state.updateIn(['adjust', 2], v => v - 1);
    case PICK_COLOR:
      return state.updateIn(['picked'], arr => arr.push(state.get('adjust')));
    case DELETE_COLOR:
      return state.updateIn(['picked'], arr => arr.filter((_, i) => i !== action.index));
    case LOCATION_SYNC:
      return state.setIn(['picked'],
        fromJS(syncPickedWithUrl(state.getIn(['picked']).toJS(), action.location)));
    default:
      return state;
  }
}

export default hwb;
