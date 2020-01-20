/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-fragments */
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisterUser path='favs' />
                <NotRegisterUser path='user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </div>
  )
}
