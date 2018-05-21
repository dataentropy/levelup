import React, { Component } from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

export default class Product extends Component {
  render() {
    return (
      <>
        <Card>
          <Image src='gadget.jpg' />
          <Card.Content>
            <Card.Header>
              Camera
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Canon S763
              </span>
            </Card.Meta>
            <Card.Description>
              Case read they must it of cold that.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='print' />
              799$
            </a>
          </Card.Content>
        </Card>
      </>
    )
  }
}
