import { blue, pink } from '@material-ui/core/colors';
import { darken } from '@material-ui/core/styles';;

const themeInitialState = {
  paletteType: 'light',
  paletteColors: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: darken(pink.A400, 0.1),
    },
  },
};

export default themeInitialState;
