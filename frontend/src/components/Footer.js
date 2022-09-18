import React from 'react'
import '../sassStyles/layout/footer.scss'
import ellieLogo from '../assets/icons/ellielogo1.png'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'
import linkedin from '../assets/icons/linkedin.png'
import award from '../assets/icons/award2.png'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer_content_gridContainer">

                <div className="footer_content_box">

                    <div className="footer_content_title">
                        <img src={ellieLogo} alt="elliecastelli" />
                        <span className="footer_content_ellieName">Ellie Castelli</span>
                        <span className="footer_content_your_castle">- Your Castle is your Home -</span>
                    </div>

                </div>

                <div className="footer_content_box two">more info</div>
                <div className="footer_content_box three">
                    <img src={award} alt="" style={{ width: '120px', height: 'auto'}}/>
                    <div className="winner">Winner Best Broker Award 2019 & 2021</div>
                    </div>
                <div className="footer_content_box contact four">
                    <div className="contactInfo headOffice">
                        <span className="contactInfo_title">Head office:</span>
                        <span className="contactInfo_address">Monaco</span>
                    </div>
                    <div className="contactInfo branch">
                        <span className="contactInfo_title">Contact a branch:</span>
                        <span className="contactInfo_address">London</span>
                        <span className="contactInfo_address">Abu Dhabi</span>
                        <span className="contactInfo_address">Bern</span>
                    </div>
                    
                
                </div>
                <div className="footer_content_box five">
                    <div>
                        <div className="footer_content_rules">
                            Ellie Castelli is a Real Estate broker liscened by the state of France<br></br>
                            Ellie Castelli abides by Equal Housing Opportunity laws.<br></br>
                            License Number 01974638.<br />
                            {/* Changes in price, condition, sale or withdrawal may be made without notice.<br></br>
                            All measurements and square footage are approximate.<br></br> */}
                        </div>
                    </div>
                </div>
                <div className="footer_content_box six">
                    <div className="icons">
                        <div className="icon"><img src={facebook} alt="facebook" style={{ width: '40px' }} /></div>
                        <div className="icon"><img src={instagram} alt="facebook" style={{ width: '40px' }} /></div>
                        <div className="icon"><img src={twitter} alt="facebook" style={{ width: '40px' }} /></div>
                        <div className="icon"><img src={linkedin} alt="facebook" style={{ width: '40px' }} /></div>
                    </div>
                </div>
            </div>

            <div className="offices">

                <div className="office">
                    <div className="loc-address">Ellie Castelli<br />
                                16 Rue Jean-Charles<br />
                        <div className="office_region">
                            <img alt="Monaco_office" src="https://www.ennessglobal.com/download_file/2746/0" style={{ height: '12px' }} />98080 Monaco
                        </div>
                    </div>
                </div>
                <div className="office">
                    <div className="loc-address">Ellie Castelli<br />
                                97 Beaconsfield Road<br />
                        <div className="office_region">
                            <img alt="London_office" src="https://www.ennessglobal.com/application/files/9416/3777/8951/UK.svg" style={{ height: '12px' }} />89564 London
                        </div>
                    </div>
                </div>
                <div className="office">
                    <div className="loc-address">Ellie Castelli<br />
                                5 Izbid Str.<br />
                        <div className="office_region">
                            <img alt="AbuDhabi_office" src="https://www.ennessglobal.com/application/files/9016/3777/9123/dubai.svg" style={{ height: '12px' }} />10980 Abu Dhabi
                        </div>
                    </div>
                </div>
                <div className="office">
                    <div className="loc-address bern">Ellie Castelli<br />
                                49 KrammGasse<br />
                        <div className="office_region">
                            <img alt="Bern_office" src="https://www.ennessglobal.com/application/files/4716/3777/9215/swiss.svg" style={{ height: '12px' }} />03011 Bern
                        </div>
                    </div>
                </div>

            </div>
            <div className="allrightsreserved"> &copy;2022 Ellie Castelli. All rights reserved.</div>
        </div>
    )
}

export default Footer