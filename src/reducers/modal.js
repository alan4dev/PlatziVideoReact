import {fromJS} from 'immutable'

import {OPEN_MODAL, CLOSE_MODAL} from '../actionTypes'

const initialState = fromJS({
  visibility: false,
  songId: null
})

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return state.merge({
        visibility: true,
        songId: action.payload.songId
      })
    case CLOSE_MODAL:
      return state.set('visibility', false)
    default:
      return state
  }
}
