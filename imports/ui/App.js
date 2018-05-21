import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';
import UserForm from './UserForm';

import { List, Container } from 'semantic-ui-react'

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
    <Container>
      <UserForm user={user} client={client} />
      { user._id && <ResolutionForm /> }
      { user._id && (
        <List as='ul'>
          {resolutions.map(resolution => (
            <List.Item as='li' key={resolution._id}>
              <span style={{
                  textDecoration: resolution.completed ? 'line-through' : 'none',
                }}>
                {resolution.name}
              </span>
              <List as='ul'>
                {resolution.goals.map(goal => (
                  <Goal goal={goal} key={goal._id} />
                ))}
              </List>
              <GoalForm resolutionId={resolution._id} />
            </List.Item>
          ))}
        </List>
      )}
    </Container>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      completed
      goals {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));
