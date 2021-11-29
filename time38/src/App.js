import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from './constants/theme';
import GlobalStyle from "./styles/global";
import RouterPage from './routes/RouterPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RouterPage />
    </ThemeProvider>
  );
};

export default App;
