import axiosAuth from '../utils/axiosAuth'
export const ADD_FRIENDS = 'ADD_FRIENDS'
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS'
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE'

export const addFriend = (friend) => dispatch => {
  dispatch({ type: ADD_FRIENDS })
  return axiosAuth()
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
      console.log('add friend res: ', res.data)
      dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data })
    }
    )
    .catch(e => {
      dispatch({ type: ADD_FRIENDS_FAILURE, payload: e })
    })
}
