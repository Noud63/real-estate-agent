import React, { useState, useEffect } from 'react'
import '../sassStyles/layout/header.scss'
import ellieLogo from '../assets/icons/ellielogo2.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/loginSlice'

const Header = () => {

    const [scrolled, setScrolled] = useState(true);
    const [showMenu, setShowMenu] = useState(false)
    const [logOut, setLogOut] = useState(false);
    const [size, setSize] = useState({ width: undefined, height: undefined })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins

    useEffect(() => {
        if (isLoggedIn) {
            setLogOut(true)
        }
    }, [isLoggedIn, logins, login])

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(false);
        }
        else {
            setScrolled(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const backHome = () => {
        navigate('/')
    }

    const buy = () => {
        navigate('/buy')
        setShowMenu(false)
    }

    const loginHandler = () => {
        navigate('/login')
        setShowMenu(false)
        if (isLoggedIn) {
            dispatch(logout())
            setLogOut(false)
        }
    }


    const register = () => {
        navigate('/register')
        setShowMenu(false)
    }

    const showMenuOverlay = () => {
        setShowMenu(true)

    }

    const closeMenuOverlay = () => {
        setShowMenu(false)
    }

    const buttons = () => {
        return (  
            <>
                <button className="buttons_btn" onClick={buy}>Buy</button>
                <button className="buttons_btn" onClick={loginHandler}>{!logOut ? 'Login' : 'Logout'}</button>
                <button className="buttons_btn" onClick={register}>Register</button>
            </>
        )
    }

    const buttonsOverlay = () => {
        return (
            <>
                <button className="buttons_btnOverlay" onClick={buy}>Buy</button>
                <button className="buttons_btnOverlay" onClick={loginHandler}>{!logOut ? 'Login' : 'Logout'}</button>
                <button className="buttons_btnOverlay" onClick={register}>Register</button>
            </>
        )
    }


    return (
        <>
            <div className={scrolled ? "header" : "header header_hide"}>
                <div className="header_france">Country: France &nbsp;-&nbsp; Regions: All Regions + Monaco</div>
                <div className="header_content">

                    <div className="header_content_iconandtitle" onClick={backHome}>
                        <img src={ellieLogo} alt="elliecastelli" style={{ width: '65px', height: '60px', marginTop: '15px' }} />
                        <div className="header_content_title">
                            <span className="header_content_ellieName">Ellie Castelli</span>
                            <span className="header_content_your_castle">- Your Castle is your Home -</span>
                        </div>
                    </div>

                    <div className="hamburger menu">
                        {!showMenu ? <GiHamburgerMenu color='rgb(55, 39, 75)' size='40' onClick={showMenuOverlay} /> :
                            <AiOutlineClose color='rgb(55, 39, 75)' size='40' onClick={closeMenuOverlay} />}
                    </div>

                    <div className="buttons">
                       {buttons()}
                    </div>
                </div>


            </div>

            {showMenu && size.width <= 800 ? <div className="menuOverlay show">
                    {buttonsOverlay()}
            </div> : <div className="menuOverlay">
                    {buttonsOverlay()}
            </div>}
        </>
    )
}

export default Header
