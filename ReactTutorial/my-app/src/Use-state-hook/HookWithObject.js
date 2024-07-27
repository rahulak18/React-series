import React, { useState } from 'react'

const HookWithObject = () => {

    const [name, setName] = useState({ firstName: '', lastName: '' });

    const updateNameFld = (e) => {
        // Make sure to destructure the object before updation
        setName({ ...name, [e.target.name]: e.target.value });
        console.log(e);
    }

    return (
        <div>
            <input type="text" value={name.firstName} name='firstName' onChange={updateNameFld} />
            <input type="text" value={name.lastName} name='lastName' onChange={updateNameFld} />
            <p>First name is : {name.firstName}</p>
            <p>Last name is : {name.lastName}</p>
        </div>
    )
}

export default HookWithObject
