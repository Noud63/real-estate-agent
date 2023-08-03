import React from 'react'
import '../sassStyles/layout/SideBar.scss'
import fulfillyourdream from '../assets/images/fulfillyourdreamimg2.jpg'
import fulfillyourdream2 from '../assets/images/fulfillyourdreamimg3.jpg'
import NewsLetter from '../components/NewsLetter'
import 'react-tippy/dist/tippy.css'

const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar_content"><NewsLetter /></div>
            <div className="sidebar_content2">
                <div className="recentlySold">Recently Sold Properties:</div>
                <div className="imageBox">
                    <div className="sidebarimg" ><img src={fulfillyourdream} alt="" /></div>
                    <div className="sidebartext"><span className="soldChateau">Chateau de Tourreau</span><span className="soldPrice">$5.890.000,-</span></div>
                </div>

                <div className="imageBox">
                    <div className="sidebarimg"><img src={fulfillyourdream2} alt="" /></div>
                    <div className="sidebartext"><span className="soldChateau">Chateau Les Carrasses</span><span className="soldPrice">$3.750.000,-</span></div>
                </div>

            </div>
        </div>
    )
}

export default SideBar
