import React from 'react'
import '../sassStyles/layout/footer.scss'
import ellieLogo from '../assets/icons/ellielogo1.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content_iconandtitle">
                <img src={ellieLogo} alt="elliecastelli" style={{ width: '75px', height: '70px', marginTop: '15px' }} />
                <div className="footer_content_title">
                    <span className="footer_content_ellieName">Ellie Castelli</span>
                    <span className="footer_content_your_castle">- Your Castle is your Home -</span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
