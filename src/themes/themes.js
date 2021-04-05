import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: teal[200],
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: teal[100],
        },
      },
    },
  },
});
