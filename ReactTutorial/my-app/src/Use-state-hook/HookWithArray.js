import React, { useState } from 'react'

const HookWithArray = () => {
    const [items, setItems] = useState([]);

    const updateItem = () => {
        // Make sure to destructure the Array before updation
        setItems([...items,
        {
            id: items.length,
            value: Math.floor(Math.random() * 10)
        }
        ])
    }

    return (
        <div>
            <button onClick={updateItem}>Add item</button>
            {
                items.map(e => (
                    <li key={e.id}>{e.value}</li>
                ))
            }
        </div>
    )
}

export default HookWithArray
