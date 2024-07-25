import React from 'react'

const ChildComponent = (props) => {

    return (
        <div>
            <button onClick={() => { props.greetHandler('child') }}>Click here to get the greeting message</button>
        </div>
    )
}

export default ChildComponent
