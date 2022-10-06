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
                        <img src={image} alt="" style={{ width: '100%', height: 'auto', opacity: '.4' }} />
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

            <div className="content_sold"><SoldProperties /></div>

            <div className="content_block2"></div>
            <div className="content_block3"></div>
            <div className="content_block4"></div>
            <div className="content_block2"></div>
            <div className="content_block5"></div>
        </>
    )
}

export default Content