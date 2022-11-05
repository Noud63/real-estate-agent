import React, { useEffect, useState } from 'react'
import deleteIcon from '../assets/icons/close2.png'
import { useSelector, useDispatch } from 'react-redux'
import { removeEmail } from '../features/addEmailsSlice'

const AllEmails = () => {

    const [mailingListLength, setMailingListLength] = useState(0)

    const dispatch = useDispatch()

    const subscribers = useSelector(state => state.emails)
    let { allemails } = subscribers


    useEffect(() => {
        let emails = JSON.parse(localStorage.getItem("allemails"))
        setMailingListLength(emails.length)
    }, [])


    const deleteEmail = (id, e) => {
        if (id) {

            dispatch(removeEmail(id))

            let emails = JSON.parse(localStorage.getItem("allemails"))
            emails = emails.filter(mail => mail._id !== id)
            localStorage.setItem('allemails', JSON.stringify(emails))
            setMailingListLength(emails.length)
        }
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    }

    return (
        <div className="allemailsWrapper">
            <div className="subscribers">Subscribers<span>{mailingListLength}</span></div>
            <div className="allemailsWrapper_allEmails">
                {allemails.map((mail) => {
                    const { email, _id } = mail
                    return <div className="user" key={_id} id={_id}>
                        {email}
                        <span>
                            <img src={deleteIcon} alt="delete" style={{ height: "20px", cursor: "pointer" }} onClick={(e) => deleteEmail(_id, e)} />
                        </span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllEmails
