import React from 'react'
import '../sassStyles/pages/Completion.scss'
import { useNavigate } from 'react-router-dom'

const Completion = () => {

const navigate = useNavigate()

    const goBack = () => {
         navigate('/')
    }


    return (
        <div className="subscription_succes">
            <div className="subscription_succes_message">
                <span>You have successfully subscribed to the newsletter.</span>
                <span>Thank your for your subscription</span>
                <span>Ellie Castelli</span>
            </div>
            <button type="button" className="back_btn" onClick={goBack}>back</button>
        </div>
    )
}

export default Completion
