const redux = require('redux')

const initialState = {
  firstName: 'Charles',
  lastName: 'Eamnes',
  age: 75
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'SET_FIRST_NAME':
    return {
      ...state,//with this we are making shallow copy of the state object
      firstName: action.payload
    }
  case 'SET_LAST_NAME':
    return {
      ...state,
      lastName: action1.payload
    }

  case 'SET_AGE':
    return {
      ...state,
      age: action2.payload
    }

  default:
    return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'SET_FIRST_NAME',
  payload: 'Alice'
}

store.dispatch(action)


const action1 = {
  type: 'SET_LAST_NAME',
  payload: 'Bob'
}

store.dispatch(action1)

const action2 = {
  type: 'SET_AGE',
  payload: 12345
}

store.dispatch(action2)

module.exports = { reducer }
