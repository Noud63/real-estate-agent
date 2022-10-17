import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import noaccess from '../assets/icons/noaccess.png'
import { Link } from 'react-router-dom'

const NoAccess = () => {

    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const storage = localStorage.getItem('isAdmin');
        return storage ? setIsAdmin(JSON.parse(localStorage.getItem('isAdmin'))) : false;
    }, [])


    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins


    useEffect(() => {
        if (isLoggedIn && (login.isAdmin || localStorage.getItem('isAdmin'))) {
            setIsAdmin(true)
        }
        if (!isLoggedIn) {
            setIsAdmin(false)
        }
    }, [isLoggedIn, login.isAdmin])

    return (
        <Link to="/alluserslist" className="link" style={{ textDecoration: 'none' }}>
            <div className="headerMenu_item">{isAdmin ? 'Admin' : <img src={noaccess} alt="" style={{ width: '25px' }} />}
            </div></Link>
    )
}

export default NoAccess
