import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import deleteIcon from '../assets/icons/close2.png'

const AllEmails = () => {

    const subscribers = useSelector(state => state.emails)
    let { isLoading, allemails, isError, isSuccess, message } = subscribers

    useEffect(()=> {
        let allemails = JSON.parse(localStorage.getItem('allemails'))
        if(allemails){
            allemails = allemails.sort((a, b) => {
                return a.email.localeCompare(b.email)
            })
        }
    },[])

const removeEmail = () => {
    console.log("Email removed!")
}

      
   return (
        <>
            {allemails.map( (mail) => {
                const { email, _id } = mail
                return <div className="user" key={_id}>{email}<span><img src={deleteIcon} alt="delete" style={{height: "20px", cursor: "pointer"}} onClick={removeEmail}/></span></div>
            })}
        </>
    )
}

export default AllEmails
