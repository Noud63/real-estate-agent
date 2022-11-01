import React, { useEffect, useState } from 'react'
import deleteIcon from '../assets/icons/close2.png'
import { useDispatch } from 'react-redux'
import { removeEmail, getAllEmails } from '../features/addEmailsSlice'

const AllEmails = ({ allemails }) => {

    const dispatch = useDispatch()

    const deleteEmail = (id, e) => {
       if(id){
           dispatch(removeEmail(id))
           let emails = JSON.parse(localStorage.getItem("allemails"))
           emails = emails.filter(mail => mail._id !== id)
           localStorage.setItem('allemails', JSON.stringify(emails))
       }
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    }
    
    return (
        <>
            {allemails.map((mail) => {
                const { email, _id } = mail
                return <div className="user" key={_id} id={_id}>{email}<span><img src={deleteIcon} alt="delete" style={{ height: "20px", cursor: "pointer" }} onClick={(e) => deleteEmail(_id, e)} /></span></div>
            })}
        </>
    )
}

export default AllEmails


// emails = emails.sort((a, b) => {
//     return a.email.localeCompare(b.email)
// })
