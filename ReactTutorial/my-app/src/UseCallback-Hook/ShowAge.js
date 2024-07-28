import React from 'react'

const ShowAge = (props) => {
    console.log('show age component')
    return (
        <div>
            <h2>Age is : {props.age}</h2>
        </div>
    )
}

export default React.memo(ShowAge);
