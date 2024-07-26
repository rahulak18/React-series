import React, { Component } from 'react'
import FRInput from './FRInput';

export default class FRParentInput extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }


    handleOnClick = () => {
        this.inputRef.current.focus();
    }


    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.handleOnClick}>Click to focus</button>
            </div>
        )
    }
}
