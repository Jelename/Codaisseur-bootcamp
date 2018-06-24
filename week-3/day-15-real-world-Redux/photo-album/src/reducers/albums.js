import { ADD_ALBUM, SET_ALBUM } from '../actions/album'

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_ALBUM:
      return [...state, action.payload]
    case SET_ALBUM:
      return [...state, ...action.payload.album]
    default:
      return state
  }
}



//this file doesnt have to be called albumsReducer because is
//already in reducer folder
