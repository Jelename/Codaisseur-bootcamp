import * as request from 'superagent'

export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUM = 'SET_ALBUM'

export function addAlbum(id, title) {
  return {
    type: 'ADD_ALBUM',
    payload: {
      id,
      title
    }
  }
}

export function setAlbum(album) {
  return {
    type: 'SET_ALBUM',
    payload: {
      album
    }
  }
}

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbum(response.body))
      })
  }
}
