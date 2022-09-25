import React from 'react'
import '../sassStyles/layout/HeaderMenu.scss'

const HeaderMenu = () => {
    return (
        <div className="borderTop">
            <div className="headerMenu">
                <div className="headerMenu_item">Home</div>
                <div className="headerMenu_item">Buy</div>
                <div className="headerMenu_item">Service</div>
                <div className="headerMenu_item">Finance</div>
                <div className="headerMenu_item">News</div>
                <div className="headerMenu_item">Currency</div>
            </div>
        </div>
    )
}

export default HeaderMenu

