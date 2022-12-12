import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../sassStyles/pages/AllUsersList.scss'
import AccessAllowed from '../components/AccessAllowed'
import AllUsersInfo from '../components/AllUsersInfo'
import AllEmails from '../components/AllEmails'
import { getAllEmails } from '../features/addEmailsSlice'
import { getAllUsers } from '../features/allUsersSlice'


const AllUsersList = () => {

    const [accessAllowed, setAccessAllowed] = useState(false)

    const dispatch = useDispatch()

    const logins = useSelector(state => state.login)
    const { isLoggedIn, login } = logins

    useEffect(() => {
        if (!isLoggedIn || login.isAdmin === false) {
            setAccessAllowed(false)
        }
    }, [isLoggedIn])

    useEffect(() => {

        if(login.isAdmin){
            dispatch(getAllEmails())
            dispatch(getAllUsers())
        }else{
            setAccessAllowed(false)
        }
        
    }, [login.isAdmin])

    return (
        <>
            <AccessAllowed accessAllowed={accessAllowed} setAccessAllowed={setAccessAllowed}/>
            <div className={accessAllowed ? "dashboardContainer" : "dashboardContainer hide"}>
                <AllUsersInfo />
                <AllEmails />
            </div>
        </>
    )
}

export default AllUsersList
