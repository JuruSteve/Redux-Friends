import axiosAuth from '../utils/axiosAuth'
export const FETCH_FRIENDS = 'FETCH_FRIENDS'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE'

export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCH_FRIENDS })
  axiosAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
    })
    .catch(e => {
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: e })
    })
}
