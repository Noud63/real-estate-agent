import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../sassStyles/pages/AllUsersList.scss'
import AccessAllowed from '../components/AccessAllowed'
import Loader from '../utilities/Loader'
import { deleteUser } from '../features/allUsersSlice'
import AllUsersInfo from '../components/AllUsersInfo'

const AllUsersList = () => {

    const allRegisteredusers = useSelector(state => state.allusers)
    let { isLoading, allUsers, isError, isSuccess, message } = allRegisteredusers

    return (
        <div className="allUsersContainer">
            <AccessAllowed />
            {isLoading && <Loader />}
            {allUsers && allUsers.map(user => {
                const { address, city, country, email, firstname, lastname, number, telephone, username, zip, _id } = user;
                return <div key={_id} className="userInfo">
                    <AllUsersInfo allUsers={allUsers}
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
                        id={_id}
                    />
                </div>
            })}
        </div>
    )
}

export default AllUsersList
