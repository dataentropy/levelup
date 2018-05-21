import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Input, Button } from 'semantic-ui-react';

export default class RegisterForm extends Component {
  registerUser = (e) => {
    e.preventDefault();
    Accounts.createUser({
      email: this.email.value,
      password: this.password.value
    }, 
    (error) => {
      if(!error) {
        this.props.client.resetStore();
      }
      console.log(error);
    });
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <Button type="submit">Register User</Button>
      </form>
    );
  }
}
