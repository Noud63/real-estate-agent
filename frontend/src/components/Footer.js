import React from 'react'
import '../sassStyles/layout/footer.scss'
import ellieLogo from '../assets/icons/ellielogo1.png'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer_content_gridContainer">

                <div className="footer_content_box icontitle">
                    
                    <div className="footer_content_title">
                        <img src={ellieLogo} alt="elliecastelli" />
                        <span className="footer_content_ellieName">Ellie Castelli</span>
                        <span className="footer_content_your_castle">- Your Castle is your Home -</span>
                    </div>
                   
                </div>

                <div className="footer_content_box">2</div>
                <div className="footer_content_box">3</div>
                <div className="footer_content_box">
                    <div>
                        <div className="footer_content_your_castle">
                            Ellie Castelli is a Real Estate broker liscened by the state of France<br></br>
                            Ellie Castelli abides by Equal Housing Opportunity laws.<br></br>
                            License Number 01974638.<br />
                        </div>
                        <div className="footer_content_your_castle">
                            Changes in price, condition, sale or withdrawal may be made without notice.<br></br>
                            All measurements and square footage are approximate.<br></br>
                            &copy;2022 Ellie Castelli. All rights reserved.
                        </div>
                    </div>

                </div>
                <div className="footer_content_box">5</div>
                <div className="footer_content_box">6</div>
            </div>
            
       </div>
    )
}

export default Footer
