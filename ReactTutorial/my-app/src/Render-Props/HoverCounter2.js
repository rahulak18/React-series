import React, { Component } from 'react'

export default class HoverCounter2 extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h2>
            </div>
        )
    }
}
