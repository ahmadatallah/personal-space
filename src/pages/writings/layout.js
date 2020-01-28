/** @jsx jsx */
import jsx from '../../jsx';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import Prism from '@theme-ui/prism';
import theme from '../../theme';
const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};
export default ({ children }) => (
  <ThemeProvider theme={theme} components={components}>
    {children}
  </ThemeProvider>
);
