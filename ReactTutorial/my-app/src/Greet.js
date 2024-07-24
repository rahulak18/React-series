import React from 'react'

const Greet = () => {
    return (
        <div>
            <h1>Hello there, this is the new react series</h1>
            <p>Latest updates makes the stateless functional components to stateful functional components and functional components supports all type of the hooks.</p>
        </div>
    )
}

export default Greet

// export default - we can import this default exported component by any of names (eg: <Temp /> )

// If we do not exported the component with the default keyword then we need to import by the same name that has been used while exporting (eg: <Greet />)
