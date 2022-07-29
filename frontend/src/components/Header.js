import React,{useState, useEffect} from 'react'
import '../sassStyles/layout/header.scss'
import ellieLogo from '../assets/icons/ellielogo2.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate} from 'react-router-dom'

const Header = () => {

    const [scrolled, setScrolled] = useState(true);
    const [ showMenu, setShowMenu ] = useState(false)

    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    })

    const navigate = useNavigate()

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

    const login = () => {
        navigate('/login')
        setShowMenu(false)
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
                    <AiOutlineClose color='rgb(55, 39, 75)' size='40' onClick={closeMenuOverlay}/>}
                </div>
                      
                    <div className="buttons">
                        <button className="buttons_btn" onClick={buy}>Buy</button>
                        <button className="buttons_btn" onClick={login}>Login</button>
                        <button className="buttons_btn" onClick={register}>Register</button>
                    </div> 
            </div>

           
        </div>

         {showMenu && size.width <= 800 ? <div className="menuOverlay show">
            <button className="buttons_btnOverlay" onClick={buy}>Buy</button>
            <button className="buttons_btnOverlay" onClick={login}>Login</button>
            <button className="buttons_btnOverlay" onClick={register}>Register</button>
        </div> : <div className="menuOverlay">
        <button className="buttons_btnOverlay" onClick={buy}>Buy</button>
        <button className="buttons_btnOverlay" onClick={login}>Login</button>
        <button className="buttons_btnOverlay" onClick={register}>Register</button>
    </div>}
    </>
    )
}

export default Header