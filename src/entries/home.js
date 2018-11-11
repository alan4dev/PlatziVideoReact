import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Map as map} from 'immutable'
import {logger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import Home from '../pages/Home'

import reducer from '../reducers'

// const logger = ({getState, dispatch}) => next => action => {
//   console.log('Action:', action)
//   const value = next(action)
//   console.log(`New state:`, getState().toJS())
  
//   return value
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('home')
)
