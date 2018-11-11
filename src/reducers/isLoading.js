import {Map as map} from 'immutable'
import {IS_LOADING} from '../actionTypes'

const initialState = map({
  active: false
})

export default function isLoading(state = initialState, action) {
  switch(action.type) {
    case IS_LOADING:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}
