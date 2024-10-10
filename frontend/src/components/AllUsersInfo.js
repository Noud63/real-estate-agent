import React from 'react'
import { deleteUser } from '../features/allUsersSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../utilities/Loader'

const AllUsersInfo = () => {

    const allRegisteredusers = useSelector(state => state.allusers)
    let { isLoading, allUsers } = allRegisteredusers

    const dispatch = useDispatch()

    const deleteSingleUser = (id) => {
        if (id) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div className="usersWrapper">
            <div className="registeredUsers">Registered Users <span>{allUsers.length}</span></div>
            <div className="usersWrapper_allUsers">
                {isLoading && <Loader />}
                {allUsers && allUsers.map(user => {
                    const { address, city, country, email, firstname, lastname, number, telephone, username, zip, _id } = user;
                    return (
                        <div key={_id} className="userInfo">
                            <div className="userInfo_users">
                                <div className="user"><span className="prefix">Id: </span><span className="names">{_id.slice(0, 15)}.....</span></div>
                                <div className="user"><span className="prefix">FirstName: </span><span className="names">{firstname}</span></div>
                                <div className="user"><span className="prefix">LastName: </span><span className="names">{lastname}</span></div>
                                <div className="user"><span className="prefix">Address: </span><span className="names">{address}</span></div>
                                <div className="user"><span className="prefix">Number: </span><span className="names">{number}</span></div>
                                <div className="user"><span className="prefix">City: </span><span className="names">{city}</span></div>
                                <div className="user"><span className="prefix">Country: </span><span className="names">{country}</span></div>
                                <div className="user"><span className="prefix">Zip: </span><span className="names">{zip}</span></div>
                                <div className="user"><span className="prefix">Email: </span><span className="names">{email}</span></div>
                                <div className="user"><span className="prefix">Tel: </span><span className="names">{telephone}</span></div>
                                <div className="user"><span className="prefix">UserName: </span><span className="names">{username}</span></div>
                                <button type="button" className="deleteUserBtn" onClick={(e) => deleteSingleUser(_id, e)}>Remove User</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllUsersInfo
