import { combineReducers } from 'redux'
import FriendsReducer from './FriendsReducer'
import LoginReducer from './LoginReducer'
import AddFriendReducer from './AddFriendReducer'

export default combineReducers({ LoginReducer, FriendsReducer, AddFriendReducer })
