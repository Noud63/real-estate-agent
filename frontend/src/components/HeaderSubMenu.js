import React from 'react'

const HeaderSubMenu = ({ showMenu, buy, scrolled, showUserInfo, register, loginHandler, isLoggedIn, logOut, size}) => {

    return (
        <div className={showMenu && size.width < 800 && !scrolled ? "menuOverlay show" : scrolled ? "menuOverlay show toTop" : "menuOverlay"}>
            <button className="buttons_btnOverlay" onClick={buy}>Buy</button>
            <button className="buttons_btnOverlay" onClick={loginHandler}>{!logOut ? 'Login' : 'Logout'}</button>
            {isLoggedIn && <button className="buttons_btnOverlay" onClick={showUserInfo}>user info</button>}
            <button className="buttons_btnOverlay" onClick={register}>Register</button>
        </div>
     )
}

export default HeaderSubMenu

