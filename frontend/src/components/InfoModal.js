import React from 'react'
import '../sassStyles/layout/InfoModal.scss'

const InfoModal = ({ showPopup, item, closeModal}) => {

    const { _id, area, bathrooms, bedrooms, city, departement, region, img, livingspace, map, name, price, like } = item;

    return (
        <div className={showPopup ? "estateInfoPopup" : "estateInfoPopup hide"} onClick={closeModal}>
              <div className="estateInfoPopup_estateInfoBox">
                    <div className="estateInfoPopup_estateInfoBox_header"><h3>{name}</h3></div>
                <div className="estateInfoPopup_estateInfoBox_gridContainer" >
                   {img.map( (img, index) => {
                       return (
                        <div key={index}>
                        <div className="estateImage" key={index}><img src={process.env.PUBLIC_URL + `assets/images/${img}`} alt="estate" /></div>
                        <div className="estateInfoPopup_moreinfo">More info on: <b>{name}</b>&nbsp;coming soon!</div>
                        </div>
                           
                       )
                   })}
                   </div>
                </div>
        </div>
    )
}

export default InfoModal
