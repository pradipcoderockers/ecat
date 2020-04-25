
import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import Loader from 'react-loader-spinner'

const Init = lazy(() => import('./components/common/init'))
const NotFound = lazy(() => import('./components/common/notFound'))

function withLoader(Component) {
  return props => (
    <Suspense fallback={
      <Loader
        style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        type="Grid"
        color="#2D75B8"
        height={50}
        width={50} /> } >
      <Component {...props} />
    </Suspense>
  )
}

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={withLoader(Init)} />
      
      <Route path='*' exact={true} component={withLoader(NotFound)} />
    </Switch>
  )
}

export default Routes
