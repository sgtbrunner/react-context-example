import React from 'react';

import ThemeProvider from './ThemeContext';
import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
};

export default App;
