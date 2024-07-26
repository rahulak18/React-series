import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default WithCounter(HoverCounter, 2)