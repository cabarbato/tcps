import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <nav className="ui container">
                <Menu inverted pointing secondary color='blue'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='gallery'
                        active={activeItem === 'gallery'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='vendors'
                        active={activeItem === 'vendors'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </nav >
        )
    }
}