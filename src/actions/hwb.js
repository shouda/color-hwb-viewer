function makeActionCreator(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const SELECT_HUE = 'SELECT_HUE';
export const SET_ORIGIN = 'SET_ORIGIN';
export const SET_ADJUST = 'SET_ADJUST';
export const SET_ORIGIN_HUE = 'SET_ORIGIN_HUE';
export const SET_ADJUST_HUE = 'SET_ADJUST_HUE';
export const ADD_HUE = 'ADD_HUE';
export const MINUS_HUE = 'MINUS_HUE';
export const ADD_WHITE = 'ADD_WHITE';
export const MINUS_WHITE = 'MINUS_WHITE';
export const ADD_BLACK = 'ADD_BLACK';
export const MINUS_BLACK = 'MINUS_BLACK';
export const PICK_COLOR = 'PICK_COLOR';
export const ADJUST_COLOR = 'ADJUST_COLOR';
export const DELETE_COLOR = 'DELETE_COLOR';

export const setOrigin = makeActionCreator(SET_ORIGIN, 'hwb');
export const setAdjust = makeActionCreator(SET_ADJUST, 'hwb');
export const setOriginHue = makeActionCreator(SET_ORIGIN_HUE, 'hue');
export const setAdjustHue = makeActionCreator(SET_ADJUST_HUE, 'hue');
export function selectHue(hue) {
  return (dispatch) => {
    dispatch(setOriginHue(hue));
    dispatch(setAdjustHue(hue));
  };
}
export const addHue = makeActionCreator(ADD_HUE);
export const minusHue = makeActionCreator(MINUS_HUE);
export const addWhite = makeActionCreator(ADD_WHITE);
export const minusWhite = makeActionCreator(MINUS_WHITE);
export const addBlack = makeActionCreator(ADD_BLACK);
export const minusBlack = makeActionCreator(MINUS_BLACK);
export const pickColor = makeActionCreator(PICK_COLOR);
export function adjustColor(hwb) {
  return (dispatch) => {
    dispatch(setOrigin(hwb));
    dispatch(setAdjust(hwb));
  };
}
export const deleteColor = makeActionCreator(DELETE_COLOR, 'index');
