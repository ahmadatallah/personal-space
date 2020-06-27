import { useState } from 'react';
import { modes } from '../utils/constants';
import { useColorMode, useThemeUI } from 'theme-ui';

function useColorModeHook({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState();
  const { theme } = useThemeUI();
  const [backgroundColor, changeBackgroundTheme] = useState();
  const populateTheme = colorTheme => {
    const i = modes.indexOf(colorTheme);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    changeTextTheme(theme.colors.modes[currentMode].secondary);
    changeBackgroundTheme(theme.colors.modes[currentMode].background);
    setColorMode(currentMode);
  };

  const changeTheme = e => {
    populateTheme(colorMode);
  };

  return { colorMode, textColor, backgroundColor, populateTheme, changeTheme };
}

export default useColorModeHook;
