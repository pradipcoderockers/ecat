import React from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

const messages = {
  title: '404',
  notFound: 'Page not found'
}

const useStyles = makeStyles({
  root: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
})

const NotFound = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span style={{fontSize: 150}}>{messages.title}</span><br />
      <span style={{fontSize: 30}}>{messages.notFound}</span>
    </div>
  )
}

export default withRouter(NotFound)
