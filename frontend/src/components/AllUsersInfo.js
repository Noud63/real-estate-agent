import React from 'react'
import { deleteUser } from '../features/allUsersSlice'
import { useSelector, useDispatch } from 'react-redux'

const AllUsersInfo = ({ address, city, country, email, firstname, lastname, number, telephone, username, zip, id, isSuccess, allUsers}) => {

    const dispatch = useDispatch()

    const deleteSingleUser = (id, e) => {
        if (isSuccess) {
            dispatch(deleteUser(id))
        }
            deleteFromStorageAndUi(id, e)
       }

const deleteFromStorageAndUi = (id, e) => {
    if(id){
        const element = e.target.parentNode.parentNode
        e.target.parentNode.parentNode.parentNode.removeChild(element)

        let users = JSON.parse(localStorage.getItem("allusers"))
        users = users.filter(user => user._id !== id)
        localStorage.setItem('allusers', JSON.stringify(users))
    }
    
}

    return (
        <div className="userInfo_users">
            <div className="user"><span className="prefix">Id: </span><span className="names">{id}</span></div>
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
            <button type="button" className="deleteUserBtn" onClick={(e) => deleteSingleUser(id, e)}>Delete User</button>
        </div>
    )
}

export default AllUsersInfo
