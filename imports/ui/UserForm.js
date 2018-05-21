import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

import { Button } from 'semantic-ui-react';

export default class UserForm extends Component {
  state = {
    login: true
  }

  render() {
    const { user, client } = this.props;
    const { login } = this.state;
    if (user._id) {
      return (
        <Button onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}>Logout</Button>
      )
    }

    return (
      <div>
        { login ? (
          <LoginForm client={client}/>
        ) : (
          <RegisterForm client={client}/>
        )}
        <Button
          onClick={() => this.setState({ login: !login })}
        >{ login ? 'Register' : 'Login' }</Button>
        </div>
    )
  }
}
