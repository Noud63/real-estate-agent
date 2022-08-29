import React from 'react'
import '../sassStyles/layout/footer.scss'
import ellieLogo from '../assets/icons/ellielogo1.png'

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

                <div className="footer_content_box">2</div>
                <div className="footer_content_box">3</div>
                <div className="footer_content_box">4</div>
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
                <div className="footer_content_box">6</div>
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
                                23 Quai Jean-Charles Rey<br />
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
                                78 KrammGasse<br />
                        <div className="office_region">
                            <img alt="Bern_office" src="https://www.ennessglobal.com/application/files/4716/3777/9215/swiss.svg" style={{ height: '12px' }} />89010 Bern
                        </div>
                    </div>
                </div>
            </div>
            
       </div>
    )
}

export default Footer
