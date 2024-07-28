import React from 'react'
import useInput from './useInput'

const FormHandlingCustomHook = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();

    }

    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
                <input type="text" {...bindFirstName} placeholder="First Name" />
                <input type="text" {...bindLastName} placeholder="Last Name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormHandlingCustomHook
