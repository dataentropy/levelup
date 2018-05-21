import React, { Component } from 'react'

import { Container, Grid, Segment } from 'semantic-ui-react'

import NavBar from './navbar/NavBar'
import Filters from './sidebar/Filters'
import Core from './core/Core'

export default class componentName extends Component {
  render() {
    return (
      <>
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
                <Core />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}
