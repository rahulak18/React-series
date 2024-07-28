import React from 'react'

const Temp = () => {
    console.log('temp component')
    return (
        <div>
            <h1>Use callback hook</h1>
        </div>
    )
}

export default React.memo(Temp);
