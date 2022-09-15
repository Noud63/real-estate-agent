import React from 'react'
import header from '../assets/images/header.jpg'
import '../sassStyles/layout/main.scss'
import award from '../assets/icons/award.png'
import heart from '../assets/icons/heartgrey.png'
import arrow from '../assets/icons/arrow.png'

const Main = () => {

   return (
        <div className="container">

           <div className="vote">
               <div className="vote_number">
                   <span className="rating">0.0</span>
                   <span className="rate-us">rate us</span>
               </div>
               <div className="vote_share">
                   <img src={arrow} alt="" style={{ width: '15px' }} />
                   <span className="rate-us">share</span>
                   </div>
               <div className="vote_like">
                   <img src={heart} alt="" style={{width: '20px'}}/>
                   <span className="rate-us">fav</span>
               </div>
           </div>

            <div className="homepage_image">
               <div className="awards"><img src={award} alt="" className="award"/></div>
                <div className="your_dream">
                    <span className="castlesandchateaux">Castles & Chateaux</span>
                    <span className="luxury_real_estate">Luxury real estate in France with Ellie Castelli</span>
                </div>
                <img src={header} alt="" className="c5_image" />
            </div>
        </div>
    )
}

export default Main