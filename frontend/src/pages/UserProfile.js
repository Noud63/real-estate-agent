import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../sassStyles/pages/UserProfile.scss'
import Loader from '../utilities/Loader'

const ShowUserInfo = () => {

    const userData = useSelector(state => state.profile)
    const { isError, isSuccess, message, profile, isLoading } = userData

    const { address, city, country, email, firstname, lastname, number, telephone, username, zip } = profile

    console.log(profile)

    return (
        <div className="profileContainer">
            <div className="profileHeader">User profile</div>
            {profile ?
            <div className="profile">
                <div className="profile_users">
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
            </div> : <Loader />}
        </div>
    )
}

export default ShowUserInfo
