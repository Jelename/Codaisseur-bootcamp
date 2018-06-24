import { combineReducers } from 'redux'
import albums from './albums' //here we are importing only the folder,
//because then is importing everything that is inside that folder

export default combineReducers({
  albums //maybe this one is not good
})



//in this file we are going to combine all the reducers used
