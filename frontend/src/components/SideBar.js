import React from 'react'
import '../sassStyles/layout/SideBar.scss'
import fulfillyourdream from '../assets/images/fulfillyourdreamimg2.jpg'
import fulfillyourdream2 from '../assets/images/fulfillyourdreamimg3.jpg'
import frenchproperty from '../assets/images/goodlife.jpg'
import magazine2 from '../assets/images/magazine2.jpg'
import magazine3 from '../assets/images/magazine4.png'
import NewsLetter from '../components/NewsLetter'
import { Tooltip } from 'react-tippy'
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

                <div className="imageBox" >
                    <Tooltip title="The Good Life magazine" position="top" trigger="mouseenter" inertia="true" theme='light'>
                        <a href="https://thegoodlifefrance.com/category/magazine/" target="blank">
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={frenchproperty} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">It's free!</span></div></a>
                    </Tooltip>
                </div>

                <div className="imageBox" >
                    <Tooltip title="French Property News Magazine" position="top" trigger="mouseenter" inertia="true" theme='light' >
                        <a href="https://www.afrenchcollection.com/french-property-news-magazine/" target="blank">
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine2} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$3.99 p/m</span></div></a>
                    </Tooltip>
                </div>

                <div className="imageBox" >
                    <Tooltip title="My French Country Home Magazine" position="top" trigger="mouseenter" inertia="true" theme='light'>
                        <a href="https://myfrenchcountryhomemagazine.com/product-category/digital-edition/" target="blank">
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine3} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$39.99 p/y</span></div></a>
                    </Tooltip>
                </div>

            </div>
        </div>
    )
}

export default SideBar
