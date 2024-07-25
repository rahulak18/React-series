import React from 'react'

const PersonInfo = () => {

    const persons = [
        {
            id: 1,
            name: 'Joy',
            age: 25,
            gender: 'male'
        },
        {
            id: 2,
            name: 'Kane',
            age: 26,
            gender: 'male'
        },
        {
            id: 3,
            name: 'Reena',
            age: 21,
            gender: 'female'
        },
        {
            id: 4,
            name: 'Ritu',
            age: 22,
            gender: 'female'
        },

    ]

    return (
        <div>
            {
                persons.map(person => (<h1 key={person.id}>Hi there, I'm {person.name} and my age is {person.age}</h1>))
            }
        </div>
    )
}

export default PersonInfo
