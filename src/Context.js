import React, { useState, createContext } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      console.log(token)
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    deActivateAuth: () => setIsAuth(false)
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
