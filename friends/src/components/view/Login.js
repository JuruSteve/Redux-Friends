import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { login } from '../../actions/LoginActions';
import './styles.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    
    handleChange = ( e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    signIn = e =>{
      e.preventDefault()
      this.props.login(this.state).then(()=>{
        this.props.history.push('/friends')
      })
    }
    render() {
    return (
      <div className="login-form">
      <h1>Login</h1>
        <form onSubmit={this.signIn}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
            <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/>
            <button type="submit">{this.props.logginIn ?  <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> : 'Login'}</button>
        </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  logginIn : state.LoginReducer.isFetching
})


export default connect(mapStateToProps, {login})(Login)