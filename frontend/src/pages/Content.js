import React from 'react'
import '../sassStyles/pages/content.scss'
import SoldProperties from '../components/SoldProperties'
import image from '../assets/images/c2bw.jpg'
import image2 from '../assets/images/c4bw.jpg'
import Magazines from '../components/Magazines'
import { Link } from 'react-router-dom'
import fleurdelis from '../assets/images/fleurdelis.png'

const Content = () => {

return (
        <>
        <div className="content_block1">
            <div className="content_block1_featuring">Featured Properties:</div>
                <div className="content_block1_wrapper">
                
                <div className="content_block1_wrapper_imgLeft">
                    
                        <img src={image} alt="" style={{ width: '100%', height: 'auto', opacity: '.7'}} />
                        <div className="name">
                            <span>Château de Chenonceau</span>
                        </div>
                     </div>

                     <div className="content_block1_wrapper_imgRight">
                        <img src={image2} alt="" style={{ width: '100%', height: 'auto', opacity: '.7' }} />
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

               <div className="content_block4"></div>

            <div className="content_block2">
                <Magazines />
                <div className="content_block2_visit">Visit our friends & partners</div>
            </div>

            <div className="content_block7">
                <div className="wrapper">
                     <div className="wrapper_header">
                        <img src={fleurdelis} alt="" className="wrapper_header_fleurdelis"/>
                        <img src={fleurdelis} alt="" className="fleurdelis"/>
                        <div className="wrapper_title">
                           <div className="wrapper_subHeader">The Good Life</div>
                           <div className="wrapper_subTitle">- Living in the French Countryside -</div>
                        </div>
                      <img src={fleurdelis} alt="" className="fleurdelis"/>
                    </div>
                   
                    <div className="wrapper_text">
                        <div className="wrapper_text_columnLeft">
                             <p>
                             French rural life varies depending on the region, but some common characteristics and aspects include:<br/><br/>

                            <b>- Slow-paced lifestyle:</b> Compared to the bustling cities, rural areas in France often have a slower, more relaxed pace of life. People may enjoy spending time outdoors, tending to their gardens or farms, and engaging in leisurely activities.<br/><br/>
                            <b>- Agriculture and farming:</b> Agriculture is an essential part of rural life in France. Many villages and towns are surrounded by farmland, vineyards, and orchards. Local farmers cultivate crops and raise livestock, contributing to the country's agricultural economy.<br/><br/>
                            <b>- Community-oriented:</b> Rural communities in France are often close-knit and value strong social connections. Residents may gather for local events, festivals, and markets, fostering a sense of camaraderie among the inhabitants.<br/><br/>
                            <b>- Cultural heritage:</b> Many rural areas in France are rich in history and cultural heritage. You'll find picturesque villages with charming architecture, ancient churches, and historic landmarks that reflect the country's long and diverse history.<br/><br/>
                            <b>- astronomy:</b> GFrench rural areas are known for their culinary delights, with locally sourced and fresh ingredients playing a central role. Each region has its own traditional dishes and specialties, making it a treat for food enthusiasts.<br/><br/>

                            </p>
                        </div>
                        <div className="wrapper_text_columnRight">
                            <b>- Limited amenities:</b> In some rural areas, access to amenities and services may be limited compared to urban centers. While there are typically grocery stores, schools, and medical facilities, residents might need to travel to nearby towns for more extensive services.<br/><br/>
                            <b>- Nature and outdoor activities:</b> Nature and outdoor activities: Living in the countryside offers access to beautiful natural landscapes, such as rolling hills, forests, rivers, and lakes. This allows residents and visitors to enjoy outdoor activities like hiking, fishing, and cycling.<br/><br/>
                            <b>- Challenges:</b> Just like rural life anywhere, there are some challenges. Youth migration to urban centers can lead to aging populations in some rural areas. Additionally, some regions may face economic difficulties, affecting job opportunities and infrastructure.<br/><br/>

                            Overall, French rural life can offer a tranquil and idyllic existence for those who appreciate the beauty of nature, the charm of small communities, and a simpler way of living. However, like any lifestyle, it comes with its unique set of advantages and challenges.
                        </div>
                    </div>
                </div>
            </div>

            <div className="content_block2"></div>
            {/* <div className="content_block6"></div> */}
        </>
    )
}

export default Content