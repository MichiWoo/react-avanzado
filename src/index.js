import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-michiwoo.now.sh/graphql'
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  ,
  document.getElementById('app'))
