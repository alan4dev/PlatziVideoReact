import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_SONG,
  SEARCH__ASYNC_SONG,
  IS_LOADING
} from '../actionTypes'

export function openModal(songId) {
  return {
    type: OPEN_MODAL,
    payload: {
      songId
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function searchSong(query) {
  return {
    type: SEARCH_SONG,
    payload: {
      query
    }
  }
}

export function searchAsyncSong(query) {
  return (dispatch) => {
    dispatch(isLoading(true))
    setTimeout(() => {
      dispatch(isLoading(false))
      dispatch(searchSong(query))
    }, 2000)
  }
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}
