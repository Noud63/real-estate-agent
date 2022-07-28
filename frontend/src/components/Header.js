import React,{useState, useEffect} from 'react'
import '../sassStyles/layout/header.scss'
import ellieLogo from '../assets/icons/ellielogo2.png'

const Header = () => {

    const [scrolled, setScrolled] = useState(true);

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

    const buy = () => {
       console.log('Buy!')
    }


    const login = () => {
        console.log('Buy!')
    }


    const register = () => {
        console.log('Buy!')
    }



    return (
        <div className={scrolled ? "header" : "header" + ' ' + "header_hide"}>
            <div className="header_france">Country: France &nbsp;-&nbsp; Regions: All Regions + Monaco</div>
            <div className="header_content">
               
                <div className="header_content_iconandtitle">
                    <img src={ellieLogo} alt="elliecastelli" style={{ width: '65px', height: '60px', marginTop: '15px' }} />
                    <div className="header_content_title">
                        <span className="header_content_ellieName">Ellie Castelli</span>
                        <span className="header_content_your_castle">- Your Castle is your Home -</span>
                    </div>
                </div>

                    <div className="buttons">
                        <button className="buttons_btn" onClick={buy}>Buy</button>
                        <button className="buttons_btn" onClick={login}>Login</button>
                        <button className="buttons_btn" onClick={register}>Register</button>
                    </div> 
            </div>
        </div>
    )
}

export default Header
