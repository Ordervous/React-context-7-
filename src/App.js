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
    avatar: "https://static.wixstatic.com/media/e1bed3_d3c16166888e4c309faa460fc2293e5e~mv2.png/v1/fill/w_177,h_176,q_90/e1bed3_d3c16166888e4c309faa460fc2293e5e~mv2.png"
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
