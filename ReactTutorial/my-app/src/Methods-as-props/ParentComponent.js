import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {

    greetFunction = (paramFromChild) => {
        alert(`Hello, this is parent called by ${paramFromChild}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetFunction} />
            </div>
        )
    }
}
