import React, { useCallback, useState } from 'react'
import Temp from './Temp';
import ShowAge from './ShowAge';
import ShowSalary from './ShowSalary';
import Button from './Button';

const HookwithCallBack = () => {

    const [age, setAge] = useState(18);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <Temp />
            <ShowAge age={age}></ShowAge>
            <Button handleOnClick={incrementAge} age={age}>Increment age</Button>
            <ShowSalary salary={salary}></ShowSalary>
            <Button handleOnClick={incrementSalary}>Increment salary</Button>
        </div>
    )
}

export default HookwithCallBack
