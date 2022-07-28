import React from 'react'
import c5 from '../assets/images/c5.jpg'
import '../sassStyles/abstracts/main.scss'

const Main = () => {

   return (
        <div className="container">
            <div className="homepage_image">
               <div className="your_dream">
                   <span>Castles & Chateaux</span>
                   <span className="luxury_real_estate">Luxury real estate in France with Ellie Castelli</span>
                   </div>
                <img src={c5} alt="" className="c5_image" />
            </div>
        </div>
    )
}

export default Main