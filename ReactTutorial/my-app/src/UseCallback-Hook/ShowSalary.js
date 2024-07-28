import React from 'react'

const ShowSalary = (props) => {
    console.log('Show salary component');
    return (
        <div>
            <h2>Salary is : {props.salary} </h2>
        </div>
    )
}

export default React.memo(ShowSalary);
