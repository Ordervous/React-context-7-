import React, { useState } from 'react';
import Navigation from './Navigation'
import ThemeContext from './ThemeContext'

function App() {

  let [theme, setTheme] = useState({
    variant: 'dark',
    toggleTheme: toggleTheme
  })

  function toggleTheme() {
    setTheme(theme => (
      {
        ...theme,
        variant: theme.variant === 'dark' ? 'light' : 'dark',
      }
    ))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Navigation />
    </ThemeContext.Provider>
  );
}

export default App;
