import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Input, Button } from 'semantic-ui-react';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  state = {
    error: null
  }

  submitForm = () => {
      this.props.createResolution({
          variables: {
              name: this.name.value
          }
      }).then(({date}) => {
          // this.props.refetch();
          this.name.value = '';
      }).catch(error => {
          console.log(error);
          this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <Input placeholder="Add Resolution" ref={input => (this.name = input)} />
        <Button onClick={this.submitForm}>Submit</Button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm)
