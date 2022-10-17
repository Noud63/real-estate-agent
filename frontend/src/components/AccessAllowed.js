import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../features/allUsersSlice'


const AccessAllowed = () => {

   const [accessAllowed, setAccessAllowed] = useState(false)

    useEffect(() => {
        const storage = localStorage.getItem('accessallowed')
        if(storage)
            setAccessAllowed(JSON.parse(localStorage.getItem('accessallowed')))
    }, [])

    const dispatch = useDispatch()

    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins

    useEffect(() => {
        if (isLoggedIn && (login.isAdmin || localStorage.getItem('isAdmin'))) {
            dispatch(getAllUsers())
            setAccessAllowed(true)
        }
    }, [dispatch, isLoggedIn, login.isAdmin])

    useEffect(()=> {
        localStorage.setItem('accessallowed', JSON.stringify(accessAllowed))
    }, [accessAllowed])

    return (
        <div className="userInfo_header">{accessAllowed ? 'All Users Info' : 'Access denied!'}</div>
    )
}

export default AccessAllowed