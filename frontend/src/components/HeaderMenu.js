import React from 'react'
import '../sassStyles/layout/HeaderMenu.scss';
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
    return (
        
            <div className="headerMenu">
                <Link to="/" className="link" style={{ textDecoration: 'none' }}><div className="headerMenu_item">Home</div></Link>
                <Link to="/buy"  className="link" style={{ textDecoration: 'none' }}><div className="headerMenu_item">Buy</div></Link>
                <Link to="/allProperties"  className="link" style={{ textDecoration: 'none' }}><div className="headerMenu_item">Properties</div></Link>
                <div className="headerMenu_item">Finance</div>
                <div className="headerMenu_item">News</div>
            <Link to="/alluserslist" className="link" style={{ textDecoration: 'none' }}><div className="headerMenu_item">users</div></Link>
            </div>
        
    )
}

export default HeaderMenu

