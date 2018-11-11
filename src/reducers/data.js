import { fromJS } from 'immutable'
import schema from '../schemas'

import {SEARCH_SONG} from '../actionTypes'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
})

export default function data(state = initialState, action) {
  switch(action.type) {
    case SEARCH_SONG: {
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}
