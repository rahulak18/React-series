import React, { Component } from 'react'

export default class MessageDisplay extends Component {

    // Binding this keyword while handling events in the class components
    // There are 4 approaches (3rd and 4th approach are recommended to use)

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    // handleOnClick() {
    //     this.setState({
    //         message: 'Button clicked'
    //     })
    // }


    // for the 4th approach
    handleOnClick = () => {
        this.setState({
            message: 'Button clickedd'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>

                {/* Normally this binding in the event handler wont work because this keyword will be undefined here */}
                <button onClick={this.handleOnClick}>Click</button>

                {/* 1st approach - works perfectly but not recommended to use*/}
                <button onClick={this.handleOnClick.bind(this)}>Click</button>

                {/* 2nd approach - works perfectly but not recommended to use */}
                <button onClick={() => { this.handleOnClick() }}>Click</button>

                {/* 3rd approach - bind this keyword in the constructor, recommended as official documentation suggest this method */}
                <button onClick={this.handleOnClick}>Click</button>

                {/* 4th approach - define handling function as arrow function, recommended to use */}
                <button onClick={this.handleOnClick}>Click</button>

            </div>
        )
    }
}
