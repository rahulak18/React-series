import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () => {

        // Never modify the state values and property directly (i.e without setstate method dont try to modify the state properties)

        // setState takes object as first parameter and callback function as the second parameter
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                // Perform those operation when you want to perform after the state properties updation
                console.log("Count value : ", this.state.count);
            }
        )


        // If we want to update the states one after other continously then it's better to go with this approach

        // Below are the two syntax provided to use setState method with the prevState (setState always expects to return an object)

        // 1st approach
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })

        // 2nd approach
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => { this.increment() }}>Increment</button>
            </div>
        )
    }
}
