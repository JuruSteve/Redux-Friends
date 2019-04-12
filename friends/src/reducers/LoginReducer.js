import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/index'

const initialState = {
  token: '',
  error: '',
  isFetching: false
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        token: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}

export default LoginReducer
