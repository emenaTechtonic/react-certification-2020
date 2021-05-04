import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ContextProvider } from '../../providers/Context/context'
import { AuthProvider } from '../../providers/Auth/auth'
import Layout from '../Layout/Layout'
import routes from '../../setup/routes'

const App = React.memo(() => (
  <BrowserRouter>
    <AuthProvider>
      <ContextProvider>
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route {...route} key={`${route}_key`} />
            ))}
          </Switch>
        </Layout>
      </ContextProvider>
    </AuthProvider>
  </BrowserRouter>
))

export default App
