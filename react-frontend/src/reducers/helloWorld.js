import * as R from 'ramda'
import { getHelloWorld } from '../helpers/api/api'
import {
  clearError,
  startLoading,
  stopLoading,
  saveErrorMsg,
} from '../helpers/api/status'

export const LOAD_HELLO_WORLD_STARTED = 'LOAD_HELLO_WORLD_STARTED'
export const LOAD_HELLO_WORLD_SUCCESS = 'LOAD_HELLO_WORLD_SUCCESS'
export const LOAD_HELLO_WORLD_FAILURE = 'LOAD_HELLO_WORLD_FAILURE'
export const LOAD_HELLO_WORLD_ENDED = 'LOAD_HELLO_WORLD_ENDED'

export const loadHelloWorldStarted = () => ({ type: LOAD_HELLO_WORLD_STARTED })
export const loadHelloWorldSuccess = success => ({ type: LOAD_HELLO_WORLD_SUCCESS, success })
export const loadHelloWorldFailure = error => ({ type: LOAD_HELLO_WORLD_FAILURE, error })
export const loadHelloWorldEnded = () => ({ type: LOAD_HELLO_WORLD_ENDED })

const saveHelloWorld = (state, action) => {  
  const newState = R.assoc('message', action.success.message, state)
  return newState
}

const messages = {
  loadFailed: 'Could not say Hello World!',
}

const initialState = {
  loading: false,
}

export const loadHelloWorld = () => (dispatch) => {
  dispatch(loadHelloWorldStarted())
  return getHelloWorld()
    .then((success) => {
      dispatch(loadHelloWorldEnded())
      dispatch(loadHelloWorldSuccess(success))
    })
    .catch((error) => {
      dispatch(loadHelloWorldEnded())
      dispatch(loadHelloWorldFailure(error))
    })
}

export default function helloWorldReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HELLO_WORLD_STARTED: {
      return startLoading(clearError(state));
    }
    case LOAD_HELLO_WORLD_ENDED: {
      return stopLoading(state);
    }
    case LOAD_HELLO_WORLD_SUCCESS: {
      return saveHelloWorld(state, action);
    }
    case LOAD_HELLO_WORLD_FAILURE: {
      return saveErrorMsg(state, action, messages.loadFailed);
    }
    default:
      return state;
  }
}