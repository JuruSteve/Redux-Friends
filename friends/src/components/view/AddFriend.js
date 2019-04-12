import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux'
import {addFriend} from '../../actions/AddFriend'

import './styles.css'
class AddFriend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      age: ''
    }
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  addFriend = (e) => {
      e.preventDefault()
    this.props.addFriend(this.state).then(()=>{
        this.props.toggle()
    })
    this.setState({name: '', email: '', age: ''})
  }
  render () {
    return (
      <div className='friends-list-container'>
        <h1>Add a Friend</h1>
        <div className='friends-container'>
          <form onSubmit={this.addFriend} className="add-friend-form">
            <fieldset>
              <label htmlFor='name'>Name</label>
              <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Email</label>
              <input type='text' value={this.state.email} name='email' onChange={this.handleChange} />
            </fieldset>
            <fieldset>
              <label htmlFor='age'>Age</label>
              <input type='text' value={this.state.age} name='age' onChange={this.handleChange} />
              <button type='submit' id="add-friend">{this.props.isAdding ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Add Friend'}</button>
            </fieldset>

          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    isAdding: state.AddFriendReducer.isAdding
})
export default connect(mapStateToProps, {addFriend})(AddFriend)
