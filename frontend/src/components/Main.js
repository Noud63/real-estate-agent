import React from 'react'
import header from '../assets/images/header.jpg'
import '../sassStyles/layout/main.scss'
import award from '../assets/icons/award.png'

const Main = () => {

   return (
        <div className="container">
           
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