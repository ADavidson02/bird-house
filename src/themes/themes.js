import { createMuiTheme } from '@material-ui/core/styles';
// import '#1a237e'  from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#b2102f',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: '#01579b'[100],
        },
      },
    },
  },
});
