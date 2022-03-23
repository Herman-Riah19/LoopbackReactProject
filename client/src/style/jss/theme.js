import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      fontFamily: 'Poppins, sans-serif',
      primary: {
        main: '#ED846D',
      },
      secondary: {
        main: '#FCFAFB',
      },

      warning: {
        main: '#F34040',
      },

      success: {
        main: '#F1C74D',
      },

      error: {
        main: red.A400,
      },
    },
});

export default theme;