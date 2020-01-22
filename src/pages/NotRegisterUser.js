/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-undef */
import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UseForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <Fragment>
          <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          <UserForm title='Registrarse' onSubmit={activateAuth} />
        </Fragment>
      }
    }
  </Context.Consumer>
)
