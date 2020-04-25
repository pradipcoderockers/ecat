import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { loadHelloWorld } from '../../reducers/helloWorld'
import { prop } from 'ramda'

const messages = {
}

const useStyles = makeStyles(theme => ({
}))

const Init = (props) => {
  const { loadHelloWorld, helloWorld } = props

  useEffect(() => {
    loadHelloWorld()
  }, [])

  const sayHello = () => {
    alert(helloWorld)
  }

  return (
    <>
      <button onClick={sayHello}>Say Hello</button>
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({
  helloWorld: state.helloWorld.message,
})

const mapDispatchToProps = dispatch => ({
  loadHelloWorld: () => dispatch(loadHelloWorld()),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Init))