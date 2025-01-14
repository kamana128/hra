import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConfigProvider } from 'antd';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
