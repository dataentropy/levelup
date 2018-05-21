import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

import Search from './Search'
import Options from './Options'

export default class NavBar extends Component {
  render() {
    return (
      <Menu fluid>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item> 
          <Search />
        </Menu.Item>

        <Menu.Item position='right'>
          <Options />
        </Menu.Item>
      </Menu>
    )
  }
}
