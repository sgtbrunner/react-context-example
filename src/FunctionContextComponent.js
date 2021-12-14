import React from 'react';

import { themeStyles } from './styles';
import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const styles = themeStyles(darkTheme);

  return (
    <>
      <div style={styles}>Function Theme</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default FunctionContextComponent;
