import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Login from './components/view/Login'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/view/Friends'
import AddFriend from './components/view/AddFriend'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      edit: false
    }
  }
  toggleHome = ()=>{
    this.setState({ edit: !this.state.edit })
  }
  render () {
    return (
      <div className='App'>
        <div className='navbar'>
          <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/friends'>
                Friends Page
            </NavLink>
          </nav>
        </div>
        <div className='main'>
          <Route exact path='/' component={Login} />
          {!this.state.edit 
        ? <PrivateRoute exact path='/friends' component={Friends} />
        :        <PrivateRoute exact path='/friends' toggle={this.toggleHome} component={AddFriend} />
          }
          <PrivateRoute exact path='/friends' toggle={this.toggleHome} component={AddFriendButton} />
        </div>
      </div>
    )
  }
}
const AddFriendButton = props => console.log(props) || (
  <div className='add-friend'>
  <button onClick={() => {
    props.toggle()
  }}>
  Add Friend
  </button>
</div>
)

export default App
