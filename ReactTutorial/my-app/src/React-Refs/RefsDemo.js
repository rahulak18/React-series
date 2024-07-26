import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)

        // 1st approach
        this.inputRef = React.createRef();

        // 2nd approach (called as callback ref - old approach)
        this.textRef = null;
        this.cRef = element => {
            this.textRef = element;
        }
    }

    componentDidMount() {
        // 1st approach
        console.log(this.inputRef);
        this.inputRef.current.focus();

        // 2nd approach
        console.log(this.textRef);
    }

    handleOnClick = () => {
        alert(this.textRef.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.cRef} />
                <button onClick={this.handleOnClick}>Click</button>
            </div>
        )
    }
}
