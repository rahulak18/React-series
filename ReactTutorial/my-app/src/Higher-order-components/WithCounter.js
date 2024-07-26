import React, { Component } from 'react'

const WithCounter = (OriginalComponent, incrementNumber) => {

    class UpdatedComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }

        render() {
            return (
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            )
        }

    }


    return UpdatedComponent;

}

export default WithCounter
