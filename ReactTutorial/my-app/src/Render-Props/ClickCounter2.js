import React, { Component } from 'react'

export default class ClickCounter2 extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}
