import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Input, Button } from 'semantic-ui-react';

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

class GoalForm extends Component {
  submitForm = () => {
      this.props.createGoal({
          variables: {
              name: this.name.value,
              resolutionId: this.props.resolutionId
          }
      }).then(({date}) => {
          // this.props.refetch();
          this.name.value = '';
      }).catch(error => {
          console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Input placeholder="Add Goal" ref={input => (this.name = input)} />
        <Button onClick={this.submitForm}>Submit</Button>
      </div>
    );
  }
}

export default graphql(createGoal, {
  name: 'createGoal',
  options: {
    refetchQueries: ['Resolutions']
  }
})(GoalForm)
