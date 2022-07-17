import React, { useState } from 'react';
import Navigation from './Navigation'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import Home from './Home'


function App() {

  let [theme, setTheme] = useState({
    variant: 'dark',
    toggleTheme: toggleTheme
  })

  let [user, setUser] = useState({
    name: "Alyssa",
    avatar: require("../node_modules/fake-avatars/avatars/124.png").default
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
    <>
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Navigation />
      </ThemeContext.Provider>
      <Home />
    </UserContext.Provider>
    </>
  )
  
}

export default App;
