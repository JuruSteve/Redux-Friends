import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const login = (cred) => (dispatch) => {
  dispatch({ type: LOGIN })
  return axios.post('http://localhost:5000/api/login', cred)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}
