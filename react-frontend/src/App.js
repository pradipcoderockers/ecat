import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import Routes from './routes'
import { QueryParamProvider } from 'use-query-params'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Routes />
          </QueryParamProvider>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
}
