import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './style/jss/theme';

import "./style/scss/material-kit-react.scss?v=1.10.0";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Cookie', 'cursive', 'Kotta One', 'Martel Sans']
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);