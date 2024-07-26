import React, { Component } from 'react'
import axios from 'axios'

export default class HttpPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            pswd: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(res => {
            alert("Successful");
        }).catch(err => {
            alert("Error");
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' value={this.state.name} onChange={this.onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" id='email' name='email' value={this.state.email} onChange={this.onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="pswd">pswd</label>
                    <input type="text" id='pswd' name='pswd' value={this.state.password} onChange={this.onChangeHandler} />
                </div>

                <button type="submit">Submit form</button>
            </form>
        )
    }
}
