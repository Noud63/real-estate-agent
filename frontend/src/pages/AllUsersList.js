import React from 'react'
import { useSelector } from 'react-redux'
import '../sassStyles/pages/AllUsersList.scss'
import AccessAllowed from '../components/AccessAllowed'
import Loader from '../utilities/Loader'

const AllUsersList = () => {

    const allRegisteredusers = useSelector(state => state.allusers)
    let { isLoading, allUsers, isError, isSuccess, message } = allRegisteredusers

return (
        <div className="allUsersContainer">
            <AccessAllowed />
            {isLoading && <Loader />}
            {allUsers && allUsers.map(user => {
                const { address, city, country, email, firstname, lastname, number, telephone, username, zip, _id } = user
                return <div key={_id} className="userInfo">
                    <div className="userInfo_users">
                        <div className="user"><span className="prefix">Id: </span><span className="names">{_id}</span></div>
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
                    </div>
                </div>
            })}
        </div>
    )
}

export default AllUsersList
