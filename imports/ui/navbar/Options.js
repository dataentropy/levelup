import React, { Component } from 'react'

import { Button } from 'semantic-ui-react'

export default class Options extends Component {
  render() {
    return (
      <>
        <Button color='violet' attached='left' icon='add'></Button>
        <Button color='violet' attached='right' icon='user'></Button>
      </>
    )
  }
}
