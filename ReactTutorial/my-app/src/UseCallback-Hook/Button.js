import React from 'react'

const Button = (props) => {
    console.log(`Button component for ${props.age ? 'age' : 'salary'}`)
    return (
        <div>
            <button onClick={props.handleOnClick}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button);
