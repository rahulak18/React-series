import React, { Component } from 'react'

export default class Welcome extends Component {

    // rconst is the shortcut to create the constructor inside the react class component
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome user'
        }
    }



    handleOnClick = () => {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => { this.handleOnClick() }}>Subscribe</button>
            </div>
        )
    }
}



