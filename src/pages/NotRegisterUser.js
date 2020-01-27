/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-undef */
import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UseForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return <Fragment>
    <RegisterMutation>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              console.log(data)
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay alún problema.'
          return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
        }
      }
    </RegisterMutation>
    <LoginMutation>
      {
        (login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              console.log(data)
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.'
          return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesión' onSubmit={onSubmit} />
        }
      }
    </LoginMutation>
  </Fragment>
}
