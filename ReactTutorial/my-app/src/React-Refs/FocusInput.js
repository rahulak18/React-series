import React, { Component } from 'react'
import InputRef from './InputRef'

export default class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef();
    }

    handleOnClick = () => {
        this.componentRef.current.focusInput();
    }


    render() {
        return (
            <div>
                <InputRef ref={this.componentRef} />
                <button onClick={this.handleOnClick}>Click to focus</button>
            </div>
        )
    }
}
