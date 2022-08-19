import React, { useState, useRef } from 'react'
import '../sassStyles/utils/EnquiryForm.scss'
import closeIcon from '../assets/icons/close.png'
import logo from '../assets/icons/ellielogo4.png'

const EnquiryForm = ({ showForm, setShowForm, setExpand, propertyName }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [success, setSuccess] = useState(false);

    const btnRef = useRef(null)

    const closeForm = () => {
        setShowForm(false)
        setExpand(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            telephoneNumber: telephone,
            propertyName
        }

        console.log(data)

        setName("")
        setEmail("")
        setTelephone("")

        if(!data){
            setSuccess(true)
            const timer = setTimeout(() => {
                setSuccess(false)
            }, 4000)
            return () => clearTimeout(timer)
        }else{
            btnRef.current.textContent = 'Request not Sent!'
            const timer = setTimeout(() => {
                btnRef.current.textContent = 'Sent Request'
            }, 4000)
            return () => clearTimeout(timer)
        }

    }

    return (
        <div className={!showForm ? "enquiryForm" : "enquiryForm show"}>

            <div className="enquiryForm_close">
                <div className="enquiryForm_close_header"></div>
                <div className="enquiryForm_close_header"><span>Make an Enquiry about: </span><span>&nbsp;{propertyName}</span></div>
                <div className="enquiryForm_close_header"><img src={closeIcon} alt="close" className="closeBtn" onClick={closeForm} /></div>
            </div>

            <div className="enquiryFormHeader">
                <span className="makeEnquiry">Make an Enquiry about:</span>
                <span className="castleName">{propertyName}</span>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div className="enquiryForm_inputfields">

                    <div className="enquiryForm_inputfields_name">
                        <label>Name:</label>
                        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required/>

                        <label>Telephone number:</label>
                        <input type="text" placeholder="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
                    </div>

                    <div className="enquiryForm_inputfields_name">
                        <label>Email:</label>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <div className="sendRequestBtn"><button type="submit" ref={btnRef}>{success ? 'Sent Successfully' : 'Sent Request'}</button></div>
                    </div>

                </div>
            </form>
                    <img src={logo} alt="logo" className="logo"/>
        </div>
    )
}

export default EnquiryForm
