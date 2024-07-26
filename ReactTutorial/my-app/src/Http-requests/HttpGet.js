import React, { Component } from 'react'
import axios from 'axios'

export default class HttpGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch(err => {
            console.log("Something went wrong");
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <p>Keep it up buddy, learning something everyday aah!</p>
                {this.state.data && this.state.data.map(ele => (
                    <p key={ele.id}>{ele.title}</p>
                ))}
            </div>
        )
    }
}
