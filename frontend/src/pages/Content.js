import React from 'react'
import '../sassStyles/pages/content.scss'
import SoldProperties from '../components/SoldProperties'
import image from '../assets/images/c2bw.jpg'
import image2 from '../assets/images/c4bw.jpg'
import { Link } from 'react-router-dom'


const Content = () => {

return (
          <>
        
            <div className="content_block1">
            
                <div className="content_block1_wrapper">
                
                <div className="content_block1_wrapper_imgLeft">
                    <div className="featuring">Featured properties:</div>
                        <img src={image} alt="" style={{ width: '100%', height: 'auto', opacity: '.4'}} />
                        <div className="name">
                            <span>Château de Chenonceau</span>
                        </div>
                     </div>

                     <div className="content_block1_wrapper_imgRight">
                        <img src={image2} alt="" style={{ width: '100%', height: 'auto', opacity: '.4' }} />
                        <div className="name">
                            <span>Château d'azay le Rideau</span>
                        </div>
                     </div>

                </div>

                   <Link to='/allproperties' style={{textDecoration: 'none'}}><div className="viewAllProps">View our Properties</div></Link>
               
            </div>

           <SoldProperties />

            <div className="content_block3">
                <div className="content_block3_wrapper">
                    <div className="finance"><span>$</span>FINANCE</div>
                    <div className="elliesTeam">
                    Ellie's dedicated team covers all areas of financial advice, helping clients to make decisions based on market insights.<br /><br />
                    Our services are conducted at local, national and international levels by specialists who have many years of experience in their respective fields.<br /><br />
                    Working on behalf of clients, we hold close relationships with lenders to make financial processes run smoothly and cost-effectively.
                    </div>
                     <Link to='/financeservice' style={{ textDecoration: 'none' }}><div className="financialService">Service</div></Link>
                </div>
            </div>
            <div className="content_block4"></div>
            <div className="block5">
                <div className="block5_content">
                <div className="balancingAct">THE BALANCING ACT</div>
                <div className="balancingAct_text">
                    Buying a house can be a a balancing act between all parties involved.<br />
                    Ellie is here to help you as a home-buyer through this challenging time in your journey.
              </div>
                <Link to='/services' style={{ textDecoration: 'none' }}><div className="services">Services</div></Link>
                </div>
           
            </div>
            <div className="content_block2"></div>
            <div className="content_block6"></div>
        </>
    )
}

export default Content