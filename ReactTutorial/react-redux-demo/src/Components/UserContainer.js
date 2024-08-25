import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux';

const UserContainer = () => {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <>
            {userData.loading ?
                (<h2>Loading...</h2>) :
                userData.err ?
                    (<h2>Error occured</h2>) :
                    userData.user.map(u => (<h1>{u.name}</h1>))
            }
        </>
    )
}

export default UserContainer
