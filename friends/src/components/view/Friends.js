import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/FriendsActions'
import './styles.css'
import Friend from './Friend'
class Friends extends Component {
  componentDidMount () {
    this.props.fetchFriends()
  }

  render () {
    return (
      <div className='friends-list-container'>
        <h1>Friends</h1>
        <div className='friends-container'>
          {
            this.props.friends.map((friend, i) => {
              return <Friend key={i} friend={friend} />
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.FriendsReducer.friends
})

export default connect(mapStateToProps, { fetchFriends })(Friends)
