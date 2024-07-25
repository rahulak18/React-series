import React, { Component } from 'react'

export default class WelcomeUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userMsg: 'Welcome user',
            guestMsg: 'Welcome guest',
            isLoggedIn: true,
        }
    }

    handleOnClick = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }

    render() {

        // 1st approach (also we can store the jsx in the variable and display according to the condition)
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h1>{this.state.userMsg}</h1>
                    <button onClick={this.handleOnClick}>Logout</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>{this.state.guestMsg}</h1>
                    <button onClick={this.handleOnClick}>Login</button>
                </div>
            )
        }


        // 2nd approach
        return this.state.isLoggedIn ? (
            <div>
                <h1>{this.state.userMsg}</h1>
                <button onClick={this.handleOnClick}>Logout</button>
            </div>
        ) : (
            <div>
                <h1>{this.state.guestMsg}</h1>
                <button onClick={this.handleOnClick}>Login</button>
            </div>
        )

        // 3rd approach (using short circuit operator)
        return this.state.isLoggedIn && (<div><h1>{this.state.userMsg}</h1></div>)

    }
}
