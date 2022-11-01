import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { CartContextProvider } from './contexts/CartContext';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
