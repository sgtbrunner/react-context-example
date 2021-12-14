import React, { Component } from 'react';

import { themeStyles } from './styles';
import { ThemeContext } from './ThemeContext';

class ClassContextComponent extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => <div style={themeStyles(darkTheme)}>Class Theme</div>}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
