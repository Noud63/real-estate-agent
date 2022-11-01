import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../sassStyles/pages/AllUsersList.scss'
import AccessAllowed from '../components/AccessAllowed'
import Loader from '../utilities/Loader'
import AllUsersInfo from '../components/AllUsersInfo'
import AllEmails from '../components/AllEmails'
import {getAllEmails} from '../features/addEmailsSlice'


const AllUsersList = () => {

    const [ registrationTotal, setRegistrationTotal ] = useState(0)

    const [newsSubscribers, setNewsSubscribers] = useState(true)

    const [sortedEmails, setSortedEmails] = useState([])
    const dispatch = useDispatch()

    const allRegisteredusers = useSelector(state => state.allusers)
    let { isLoading, allUsers, isError, isSuccess, message } = allRegisteredusers

    const subscribers = useSelector(state => state.emails)
    let { allemails } = subscribers

    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins

     useEffect(() => {
        if (!isLoggedIn) {
            setNewsSubscribers(false)
        }
    }, [isLoggedIn])


    return (
        <>
            <AccessAllowed />
            <div className={newsSubscribers ? "dashboardContainer" : "dashboardContainer hide"}>
                <div className="usersWrapper">
                    <div className="registeredUsers">Registered Users <span>{allUsers.length}</span></div>
                    <div className="usersWrapper_allUsers">

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
                                        setRegistrationTotal={setRegistrationTotal}
                                        id={_id}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="allemailsWrapper">
                    <div className="subscribers">Subscribers<span>{allemails.length}</span></div>
                    <div className="allemailsWrapper_allEmails">
                        <AllEmails allemails={allemails} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AllUsersList
