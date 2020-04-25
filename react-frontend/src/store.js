import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
import helloWorld from './reducers/helloWorld'

let composeEnhancers = compose
if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers
}

const reducers = (history) => combineReducers({
  helloWorld,
  router: connectRouter(history),
})

export const history = createBrowserHistory()

const middlewares = [thunk]

const store = createStore(
  reducers(history),
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

export default store