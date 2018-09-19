import React from 'react';
import store from 'app/store';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import globalStyling from 'styles';
import theme from 'styles/theme';
import 'app/static/favicon.ico';
import App from './App';

globalStyling();

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
