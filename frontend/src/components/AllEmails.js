import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeEmail } from '../features/addEmailsSlice'
import EmailItem from './EmailItem'
import Loader from '../utilities/Loader'


const AllEmails = () => {

    const dispatch = useDispatch()

    const subscribers = useSelector(state => state.emails)
    let { allemails, isLoading } = subscribers

    const deleteEmail = (id, e) => {
        if (id) {
            dispatch(removeEmail(id))
        }
    }
   
    return (
        <div className="allemailsWrapper">
            <div className="subscribers">Subscribers<span>{allemails.length}</span></div>
            <div className="allemailsWrapper_allEmails">
                {isLoading && <Loader />}
                {allemails.map((mail) => {
                    const { email, _id } = mail
                    return <EmailItem  deleteEmail={deleteEmail} email={email} id={_id} key={_id} isLoading={isLoading}/>
                })}
            </div>
        </div>
    )
}

export default AllEmails
