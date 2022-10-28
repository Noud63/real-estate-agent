import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../sassStyles/pages/AllUsersList.scss'
import AccessAllowed from '../components/AccessAllowed'
import Loader from '../utilities/Loader'
import AllUsersInfo from '../components/AllUsersInfo'
import AllEmails from '../components/AllEmails'

const AllUsersList = () => {

    const [newsSubscribers, setNewsSubscribers] = useState(true)

    const allRegisteredusers = useSelector(state => state.allusers)
    let { isLoading, allUsers, isError, isSuccess, message } = allRegisteredusers

    const subscribers = useSelector(state => state.emails)
    let { allemails } = subscribers

    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            setNewsSubscribers(false)
            dispatch()
        }
    }, [isLoggedIn])

    return (
        <>
            <AccessAllowed />
            <div className={newsSubscribers ? "usersContainer" : "usersContainer hide"}>

                <div className="usersContainer_allUsers">
                    <div className="registeredUsers">Registered Users <span>{allUsers.length}</span></div>
                    {isLoading && <Loader />}
                    {allUsers && allUsers.map(user => {
                        const { address, city, country, email, firstname, lastname, number, telephone, username, zip, _id } = user;
                        return (
                            <div key={_id} className="userInfo">

                                <AllUsersInfo
                                    allUsers={allUsers}
                                    isSuccess={isSuccess}
                                    address={address}
                                    city={city}
                                    country={country}
                                    email={email}
                                    firstname={firstname}
                                    lastname={lastname}
                                    number={number}
                                    telephone={telephone}
                                    username={username}
                                    zip={zip}
                                    id={_id.slice(0,15)}
                                />
                            </div>

                        )
                    })}
                </div>
                <div className="usersContainer_allemails">
                    <div className="usersContainer_allemails_subscribers">Subscribers<span>{allemails.length}</span></div>
                    <AllEmails allemails={allemails}/>
                </div>
            </div>
        </>
    )
}

export default AllUsersList
