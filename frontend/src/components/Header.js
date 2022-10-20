import React, { useState, useEffect } from 'react'
import '../sassStyles/layout/header.scss'
import ellieLogo from '../assets/icons/ellielogo2.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/loginSlice'
import { reset } from '../features/allUsersSlice'
import { resetProfile } from '../features/userProfileSlice'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const [logOut, setLogOut] = useState(false);
    const [size, setSize] = useState({ width: undefined, height: undefined })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logins = useSelector(state => state.login)
    const { login, isLoggedIn } = logins

    const userData = useSelector(state => state.profile)
    const { isError, isSuccess, message, profile, isLoading } = userData

    useEffect(() => {
        if (isLoggedIn) {
            setLogOut(true)
        }
    }, [isLoggedIn])


    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 100 ? setScrolled(true) : setScrolled(false);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        console.log(login)
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

    const loggingOut = () => {
        dispatch(logout())
        setLogOut(false)
        dispatch(reset())
        dispatch(resetProfile())
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('allusers')
        localStorage.removeItem('accessallowed')
        localStorage.removeItem('userToken')
        localStorage.removeItem('isAdmin')
        localStorage.removeItem('profile')
    }


    const backHome = () => {
        navigate('/')
    }

    const buy = () => {
        navigate('/buy')
        setShowMenu(false)
    }

    const register = () => {
        navigate('/register')
        loggingOut()
        setShowMenu(false)
    }


    const showUserInfo = () => {
        navigate('/userprofile')
        setShowMenu(false)
    }


    const loginHandler = () => {
        navigate('/login')
        setShowMenu(false)
        if (logOut) {
            loggingOut()
            navigate('/')
        }

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
                <button className={!showMenu || size.width > 800 ? "buttons_btn" : "buttons_btnOverlay"} onClick={buy}>Buy</button>
                <button className={!showMenu || size.width > 800 ? "buttons_btn" : "buttons_btnOverlay"} onClick={loginHandler}>{!logOut ? 'Login' : 'Logout'}</button>
                {logOut ? <button className={!showMenu || size.width > 800 ? "buttons_btn" : "buttons_btnOverlay"} onClick={showUserInfo}>user info</button> : ""}
                <button className={!showMenu || size.width > 800 ? "buttons_btn" : "buttons_btnOverlay"} onClick={register}>Register</button>
            </>
        )
    }

    return (
        <>
            <div className={scrolled ? "header header_hide" : "header"}>

                <div className="header_france">
                    <div className="frame2_driehoek"></div>
                    <span>Country: France &nbsp;-&nbsp; Regions: All Regions + Monaco</span>
                    <div className="frame2_driehoek"></div>
                </div>

                <div className="header_content">

                    <div className="header_content_iconandtitle" onClick={backHome}>
                        <img src={ellieLogo} alt="elliecastelli" style={{ width: '60px', height: '55px', marginTop: '12px' }} />
                        <div className="header_content_title">
                            <span className="header_content_ellieName">Ellie Castelli</span>
                            <span className="header_content_your_castle">- Your Castle is your Home -</span>
                        </div>
                    </div>

                    <div className="hamburger menu">
                        {!showMenu ? <GiHamburgerMenu color='rgb(65, 0, 0)' size='40' onClick={showMenuOverlay} /> :
                            <AiOutlineClose color='rgb(55, 39, 75)' size='40' onClick={closeMenuOverlay} className="cross" />}
                    </div>

                    <div className="buttons">
                        {buttons()}
                    </div>
                </div>

            </div>

            {showMenu && size.width <= 800 ? <div className={!scrolled ? "menuOverlay show" : "menuOverlay show toTop"}>
                {buttons()}
            </div> : <div className="menuOverlay">
                {buttons()}
            </div>}

        </>
    )
}

export default Header


  // const buttonsOverlay = () => {
    //     return (
    //         <div className="buttonsBox">
    //             <button className="buttons_btnOverlay" onClick={buy}>Buy</button>
    //             <button className="buttons_btnOverlay" onClick={loginHandler}>{!logOut ? 'Login' : 'Logout'}</button>
    //             {isLoggedIn && <button className="buttons_btnOverlay" onClick={showUserInfo}>user info</button>}
    //             <button className="buttons_btnOverlay" onClick={register}>Register</button>
    //         </div>
    //     )
    // }