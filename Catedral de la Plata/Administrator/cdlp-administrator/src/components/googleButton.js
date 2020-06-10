import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const CLIENT_ID = '486174749370-9g95jumgfdr1ds2lonv2246d6dsjjno8.apps.googleusercontent.com';

class GoogleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    //this.loginFailure = this.loginFailure.bind(this);

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

    else {
      alert('Failed to log in. Please try again.')
    }
  }
  
  logout(response) {
    this.setState(state => ({
      isLoggedIn: false,
      accessToken: ''
    }));
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
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
          />
        }
      </div>
    )
  }
}

export default GoogleButton;