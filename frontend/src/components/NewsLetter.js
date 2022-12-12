import React, { useState, useRef, useEffect } from 'react'
import '../sassStyles/layout/NewsLetter.scss'
import emailjs from '@emailjs/browser';
import { useSelector, useDispatch } from 'react-redux'
import { addEmail, getAllEmails } from '../features/addEmailsSlice'
import { useNavigate } from 'react-router-dom'

const NewsLetter = () => {

    const [success, setSuccess] = useState("Subscribe");
    const [newEmail, setNewEmail] = useState("");

    const navigate = useNavigate()

    const btnRef = useRef(null)
    const form = useRef();

    const dispatch = useDispatch()

    const emails = useSelector(state => state.emails)
    const { email, isLoading, isSuccess } = emails

    const handleSubmit = (e) => {
        e.preventDefault();
        // setSuccess('Sending....')

        // emailjs.sendForm('service_uajwvyh', 'template_7uflv8h', form.current, 'user_hmFUVd309vqUiRXCpAWNG')
        //     .then((result) => {
        //         console.log(result.text)
        //         setSuccess('Email successfully sent!')
        //         let timer = setTimeout(() => {
        //             setSuccess("Subscribe")
        //             clearTimeout(timer)
        //         }, 5000)
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        const emailObj = { email: newEmail }
        dispatch(addEmail(emailObj))
        form.current.reset()
        setNewEmail("")

        navigate('/payment')
    }

    return (
        <div className="newsLetter">

            <div className="newsLetter_top">
                <div className="newsLetter_top_header">Newsletter Subscription:</div>
            </div>

            <form onSubmit={handleSubmit} className="form" ref={form} autoComplete="off">
                <div className="newsLetter_inputfields">

                    <div className="newsLetter_inputfields_name2">
                        <input type="email" placeholder="email" name="from_email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required />
                        <div className="sendRequestBtn">
                            <button type="submit" value="send" ref={btnRef}>{success}</button>
                        </div>
                    </div>

                </div>
                <div className="newsLetter_footer">*newsletter will be sent once a month</div>
            </form>
        </div>
    )
}

export default NewsLetter