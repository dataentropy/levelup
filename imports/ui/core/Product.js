import React, { Component } from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

export default class Product extends Component {
  render() {
    const product = this.props.product;

    return (
      <>
        <Card>
          <Image src={product.images[0]} />
          <Card.Content>
            <Card.Header>
              {product.name}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                {product.category}
              </span>
            </Card.Meta>
            <Card.Description>
              {product.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='print' />
                {product.price}
            </a>
          </Card.Content>
        </Card>
      </>
    )
  }
}
