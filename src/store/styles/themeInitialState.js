import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { darken } from '@material-ui/core/styles/colorManipulator';

const themeInitialState = {
  paletteType: 'light',
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
};

export default themeInitialState;
