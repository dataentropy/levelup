import React, { Component } from 'react'

import { Container, Grid, Segment } from 'semantic-ui-react'

import NavBar from './navbar/NavBar'
import Filters from './sidebar/Filters'
import Core from './core/Core'
import AddProduct from './core/AddProduct'

export default class ShopApp extends Component {
  render() {
    return (
      <div>
        <Grid container stackable>
          <Grid.Row>
            <NavBar />
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Filters />
            </Grid.Column>
            <Grid.Column width={13}>
              <Segment>
                {/*<Core /> */}
                <AddProduct />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
