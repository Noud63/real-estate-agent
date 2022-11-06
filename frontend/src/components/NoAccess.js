import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import noaccess from '../assets/icons/noaccess.png'
import { useNavigate } from 'react-router-dom'


const NoAccess = () => {

    const [isAdmin, setIsAdmin] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const storage = localStorage.getItem('isAdmin');
        if(storage){
            setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')))
        }
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


     const getAllUsersInfo = () => {
          navigate('/alluserslist')
         }


    return (
        
            <div className="headerMenu_item" onClick={getAllUsersInfo}>{isAdmin ? 'Dashboard' : <img src={noaccess} alt="" style={{ width: '25px' }} />}</div>
    )
}

export default NoAccess
