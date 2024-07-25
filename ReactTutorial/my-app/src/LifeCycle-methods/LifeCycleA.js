import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Joy'
        }

        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount");
    }


    render() {
        console.log("LifeCylceA render");
        return (
            <div>
                <h4>LifeCylceA component</h4>
                <LifeCycleB />
            </div>
        )
    }
}
