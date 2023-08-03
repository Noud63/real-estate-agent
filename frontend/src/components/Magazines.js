import React from 'react'
import '../sassStyles/layout/magazines.scss'
import magazine2 from '../assets/images/magazine2.jpg'
import magazine3 from '../assets/images/magazine4.png'
import viealacampagne from '../assets/images/viealacampagne.jpg'
import thegoodlifefrance from '../assets/images/thegoodlifefrance.jpg'
import { Tooltip } from 'react-tippy'

const Magazines = () => {

  return (

    <div className="magazines">
                <div className="magazines_imageWrapper">
                <div className="magazines_imageBox" >
                    <Tooltip title="The Good Life France magazine" position="top" trigger="mouseenter" inertia="true" theme='light'>
                        <a href="https://thegoodlifefrance.com/category/magazine/" target="blank" style={{textDecoration: 'none'}}>
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={thegoodlifefrance} alt=""/></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">It's free!</span></div></a>
                    </Tooltip>
                </div>

                <div className="magazines_imageBox" >
                    <Tooltip title="French Property News Magazine" position="top" trigger="mouseenter" inertia="true" theme='light' >
                        <a href="https://www.afrenchcollection.com/french-property-news-magazine/" target="blank" style={{textDecoration: 'none'}}>
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine2} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$3.99 p/m</span></div></a>
                    </Tooltip>
                </div>

                <div className="magazines_imageBox" >
                    <Tooltip title="Vie à la Campagne Magazine" position="top" trigger="mouseenter" inertia="true" theme='light' >
                        <a href="https://sprea.it/abbonamenti/3339-vie-a-la-campagne" target="blank" style={{textDecoration: 'none'}}>
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={viealacampagne} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$29,40 (6 numeri)</span></div></a>
                    </Tooltip>
                </div>

                <div className="magazines_imageBox" >
                    <Tooltip title="My French Country Home Magazine" position="top" trigger="mouseenter" inertia="true" theme='light'>
                        <a href="https://myfrenchcountryhomemagazine.com/product-category/digital-edition/" target="blank" style={{textDecoration: 'none'}}>
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine3} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$39.99 p/y</span></div></a>
                    </Tooltip>
                </div>
                </div>
            </div>
  )
}

export default Magazines
