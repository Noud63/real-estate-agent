import React from 'react'
import '../sassStyles/layout/HeaderMenu.scss';
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
    return (
        <div className="borderTop">
            <div className="headerMenu">
                <Link to="/" style={{ textDecoration: 'none' }}><div className="headerMenu_item">Home</div></Link>
                <Link to="/buy" style={{ textDecoration: 'none' }}><div className="headerMenu_item">Buy</div></Link>
                <div className="headerMenu_item">Service</div>
                <div className="headerMenu_item">Finance</div>
                <div className="headerMenu_item">News</div>
                <div className="headerMenu_item">Currency</div>
            </div>
        </div>
    )
}

export default HeaderMenu

