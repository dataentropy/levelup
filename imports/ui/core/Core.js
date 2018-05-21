import React, { Component } from 'react'

import { Card } from 'semantic-ui-react'

import Product from './Product'

export default class Core extends Component {
  render() {
    return (
      <>
        <Card.Group itemsPerRow={4}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Card.Group>
      </>
    )
  }
}
