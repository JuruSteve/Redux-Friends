import { FETCH_FRIENDS, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from '../actions/index'

const initialState = {
  friends: [],
  error: '',
  isFetching: false
}

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: '',
        isFetching: false
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }

    default:
      return state
  }
}

export default FriendsReducer
