/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-undef */
import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UseForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <Fragment>
          <RegisterMutation>
            {
              (register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                return <UserForm title='Iniciar Sesión' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>
          <UserForm title='Registrarse' onSubmit={activateAuth} />
        </Fragment>
      }
    }
  </Context.Consumer>
)
