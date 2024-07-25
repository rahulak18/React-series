import React, { Component } from 'react'

export default class LifeCycleB extends Component {


    constructor(props) {
        super(props)

        this.state = {
            name: 'Joy'
        }

        console.log("LifeCycleB constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount");
    }

    render() {
        console.log("LifeCylceA render");
        return (
            <div>
                <h4>LifeCylceB component</h4>

            </div>
        )
    }
}
