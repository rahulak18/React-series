import React, { Component } from 'react'

export default class FormHandling extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            message: "",
            skill: 'React'
        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleMsgChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleSkillChange = event => {
        this.setState({
            skill: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        alert(`${this.state.name} ${this.state.message} ${this.state.skill}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="name">UserName:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                </div>

                <div>
                    <label htmlFor="msg">Message:</label>
                    <textarea type="text" name="msg" value={this.state.message} onChange={this.handleMsgChange} />
                </div>

                <div>
                    <label htmlFor="skill">Skill:</label>
                    <select name="skill" id="skill" value={this.state.skill} onChange={this.handleSkillChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>

                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}
