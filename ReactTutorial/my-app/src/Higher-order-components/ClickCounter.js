import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Click {this.props.count} times</button>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default WithCounter(ClickCounter, 5)
