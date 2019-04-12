import { ADD_FRIENDS,
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_FAILURE } from '../actions/index'

const initialState = {
  isAdding: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        isAdding: true,
        error: ''
      }
    case ADD_FRIENDS_SUCCESS:
      return {
        ...state,
        isAdding: false,
        error: ''
      }
    case ADD_FRIENDS_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      }
    default:
      return state
  }
}
