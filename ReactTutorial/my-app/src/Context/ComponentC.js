import React from 'react'
import { UserConsumer } from './UserContext'

const ComponentC = () => {
    return (

        <UserConsumer>
            {
                (userName) => (
                    <h1>Component C - Hello {userName}</h1>
                )
            }
        </UserConsumer>

    )
}

export default ComponentC
