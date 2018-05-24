import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Card } from 'semantic-ui-react'

import Product from './Product'

class Core extends Component {
  render() {
    if(this.props.data.loading) {
      return <span>Loading</span>;
    }

    return (
      <>
        <Card.Group itemsPerRow={4}>
          {this.props.data.products.map(product => (
            <Product product={product} key={product._id}/>
          ))}
        </Card.Group>
      </>
    )
  }
}

const productsQuery = gql`
  query productsQuery {
    products {
      _id
      name
      description
      price
      category
      images
    }
  }
`;

export default graphql(productsQuery)(Core);
