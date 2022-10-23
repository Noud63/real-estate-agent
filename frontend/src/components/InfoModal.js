import React from 'react'
import '../sassStyles/layout/InfoModal.scss'

const InfoModal = ({ showPopup, name, closeModal}) => {
    return (
        <div className={showPopup ? "estateInfoPopup" : "estateInfoPopup hide"} onClick={closeModal}>
            <div className="estateInfoPopup_estateInfo">Info on:&nbsp;<b>{name}</b> &nbsp;coming soon!</div>
        </div>
    )
}

export default InfoModal
