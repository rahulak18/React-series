import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Hi {this.props.name},this is the stateful class component in the React.</h1>
                <br />
                <p>Main advantage of stateful class components over the stateless functional component are, class components provides the life cycle hooks where the functional components doesn't.
                </p>
                {this.props.children}
            </div>
        )
    }
}
