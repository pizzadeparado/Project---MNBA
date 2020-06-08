import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const CLIENT_ID = '394912027431-se6uo15k0d4oapfa4rvbpj3f1bfr22i8.apps.googleusercontent.com';

class GoogleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.loginFailure = this.loginFailure.bind(this);

    this.logout = this.logout.bind(this);
    this.logoutFailure = this.logoutFailure.bind(this);
  }

  login(response) {
    if (response.Zi.access_token) {
      this.setState(state => ({
        isLoggedIn: true,
        accessToken: response.Zi.access_token
      }));
    }
  }
  
  logout(response) {
    this.setState(state => ({
      isLoggedIn: false,
      accessToken: ''
    }));
  }

  loginFailure(response) {
    alert('Failed to log in. Please try again.')
  }

  logoutFailure(response) {
    alert('There was an error when trying to log you out. Please try again.')
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ?
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
            onFailure={this.logoutFailure}
          >
          </GoogleLogout> :
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Login with Google'
            onSuccess={this.login}
            onFailure={this.loginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
          />
        }
      </div>
    )
  }
}

export default GoogleButton;