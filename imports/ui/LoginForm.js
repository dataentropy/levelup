import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withApollo } from 'react-apollo';

import { Input, Button, Form } from 'semantic-ui-react';

export default class LoginForm extends Component {
  login = (e) => {
    console.log(this.email.value);
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, 
    (error) => {
      if(!error) {
        this.props.client.resetStore();
      }
      console.log(error);
    })
  };

  render() {
    return (
      <Form onSubmit={this.login}>
        <input type='email' ref={input => (this.email = input)} />
        <input type='password' ref={input => (this.password = input)} />
        <Button type="submit">Login User</Button>
      </Form>
    );
  }
}
