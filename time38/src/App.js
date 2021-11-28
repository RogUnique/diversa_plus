import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from './constants/theme';
import RouterPage from './routes/RouterPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterPage />
    </ThemeProvider>
  );
};

export default App;
