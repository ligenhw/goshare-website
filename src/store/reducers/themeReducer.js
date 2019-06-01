import { THEME_CHANGE } from '../types'
import themeInitialState from '../styles/themeInitialState';

const mapping = {
  [THEME_CHANGE]: (state, action) => ({
    paletteType: action.payload.paletteType || state.paletteType,
    paletteColors: action.payload.paletteColors || state.paletteColors,
  }),
};

function themeReducer(state = themeInitialState, action) {
  let newState = state;

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  return newState;
}

export default themeReducer;
