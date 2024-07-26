import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

export default class ComponentB extends Component {

    static contextType = UserContext; // works only for the class components
    render() {
        return (
            <div>
                <h1>Component B - Hello {this.context}</h1>
                <ComponentC />
            </div>
        )
    }
}
