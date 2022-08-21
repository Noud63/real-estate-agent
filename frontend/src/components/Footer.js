import React from 'react'
import '../sassStyles/layout/footer.scss'
import ellieLogo from '../assets/icons/ellielogo1.png'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer_content_gridContainer">

                <div className="footer_content_box icontitle">
                    <img src={ellieLogo} alt="elliecastelli"  />
                    <div className="footer_content_title">
                        <span className="footer_content_ellieName">Ellie Castelli</span>
                        <span className="footer_content_your_castle">- Your Castle is your Home -</span>
                    </div>
                </div>

                <div className="footer_content_box">info</div>
                <div className="footer_content_box">info</div>
                <div className="footer_content_box">info</div>
                <div className="footer_content_box">info</div>
                <div className="footer_content_box">info</div>
            </div>
            
       </div>
    )
}

export default Footer
