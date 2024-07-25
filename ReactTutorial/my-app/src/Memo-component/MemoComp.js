import React from 'react'

const MemoComp = () => {
    return (
        <div>
            <p>This is the react memo component</p>
        </div>
    )
}

export default React.memo(MemoComp);
