import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

export default class Filters extends Component {
  render() {
    return (
      <>
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Filters</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='enterprise' onClick={this.handleItemClick} />
              <Menu.Item name='consumer' onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Advanced</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='rails' onClick={this.handleItemClick} />
              <Menu.Item name='python' onClick={this.handleItemClick} />
              <Menu.Item name='php' onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Advertisement</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='shared' onClick={this.handleItemClick} />
              <Menu.Item name='dedicated' onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Recommendation</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='email' onClick={this.handleItemClick}>
                E-mail Support
              </Menu.Item>

              <Menu.Item name='faq' onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </>
    )
  }
}
