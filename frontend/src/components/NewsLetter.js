import React, { useState, useRef } from 'react'
import '../sassStyles/layout/NewsLetter.scss'
import closeIcon from '../assets/icons/close.png'
import logo from '../assets/icons/ellielogo4.png'
import emailjs from '@emailjs/browser';

const NewsLetter = ({ showForm, setShowForm, setExpand, propertyName }) => {

    const [success, setSuccess] = useState("Submit");

    const btnRef = useRef(null)
    const form = useRef();

    const closeForm = () => {
        setShowForm(false)
        setExpand(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess('Sending....')

        emailjs.sendForm('service_uajwvyh', 'template_7uflv8h', form.current, 'user_hmFUVd309vqUiRXCpAWNG')
            .then((result) => {
                console.log(result.text)
                setSuccess('Message successfully sent!')
                let timer = setTimeout(() => {
                    setSuccess("submit")
                    clearTimeout(timer)
                }, 5000)
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    }

    return (
        <div className="newsLetter">

            <div className="newsLetter_close">
                <div className="newsLetter_close_header">Newsletter Subscription:</div>
            </div>

            <form onSubmit={handleSubmit} className="form" ref={form} autoComplete="off">
                <div className="newsLetter_inputfields">

                    <div className="newsLetter_inputfields_name">
                        {/* <label>Name:</label> */}
                        <input type="text" placeholder="name" name="from_name" required />

                        {/* <label>Telephone number:</label> */}
                        <input type="text" placeholder="telephone" name="from_telephone" required />
                    </div>

                    <div className="newsLetter_inputfields_name2">
                        {/* <label>Email:</label> */}
                        <input type="email" placeholder="email" name="from_email" required />
                        <div className="sendRequestBtn"><button type="submit" value="send" ref={btnRef}>{success}</button></div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default NewsLetter