import React,{useEffect} from 'react'
import deleteIcon from '../assets/icons/close2.png'
import { useDispatch } from 'react-redux'
import { getAllEmails } from '../features/addEmailsSlice'

const AllEmails = ({allemails}) => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllEmails())
        allemails = JSON.parse(localStorage.getItem('allemails'))
        if(allemails){
            allemails = allemails.sort((a, b) => {
                return a.email.localeCompare(b.email)
            })
            localStorage.setItem('allemails', JSON.stringify(allemails))
        }
    },[])

     const removeEmail = () => {
      console.log("Email removed!")
    }

    console.log(allemails)
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
