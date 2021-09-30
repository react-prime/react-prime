import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import client from 'client';
import theme from 'styles/theme';

import App from './App';

const Root: React.FC = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default Root;
