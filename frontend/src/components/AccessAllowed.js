import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const AccessAllowed = ({ accessAllowed, setAccessAllowed }) => {

    useEffect(() => {
        const storage = localStorage.getItem('accessallowed')
        if (storage)
            setAccessAllowed(JSON.parse(localStorage.getItem('accessallowed')))
    }, [setAccessAllowed])

    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins

    useEffect(() => {
        if (isLoggedIn && (login.isAdmin || localStorage.getItem('isAdmin'))) {
            setAccessAllowed(true)
        }
    }, [isLoggedIn, login.isAdmin, setAccessAllowed])

    useEffect(() => {
        localStorage.setItem('accessallowed', JSON.stringify(accessAllowed))
    }, [accessAllowed])

    return (
        <div className={!accessAllowed ? "userInfo_header" : "userInfo_header hide"}>Access denied!</div>
    )
}

export default AccessAllowed