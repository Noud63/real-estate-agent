import React,{useState} from 'react'
import '../sassStyles/layout/content.scss'
import c9 from '../assets/images/c9.jpg'
import dordogne from '../assets/images/dordogne.png'
import bedrooms from '../assets/icons/bedrooms.png'
import bathrooms from '../assets/icons/bathrooms.png'
import livingspace from '../assets/icons/livingspace.png'
import area from '../assets/icons/area.png'


const Content = () => {

    const [ showRegionName, setShowRegionName ] = useState(false)

    const handleMouseOver = () => {
        setShowRegionName((prev) => !prev)
    }

    const makeEnquiry = () => {
        console.log('Enquiry')
    }

    return (
        <div className="content2">
            <div className="content2_property">
                <div className="content2_castleImageBox"><img src={c9} alt="" className="content2_castleImage" /></div>
                <div className="content2_info">
                    <div className="title"><h5>Chateau des Milandes</h5></div>
                    <div className="location">
                        <div><span>Region:</span> Limousine</div>
                        <div><span>Departement:</span> Dordogne</div>
                        <div><span>City:</span> Sarlat</div>
                    </div>
                    <div className="icons">
                        <div className="icon">18 <img src={bedrooms} alt=""/></div>
                        <div className="icon">5 <img src={bathrooms} alt=""/></div>
                        <div className="icon">1200 <img src={livingspace} alt=""/></div>
                        <div className="icon">6ha <img src={area} alt=""/></div>
                    </div>
                    <div className="price"><span>Price:</span> $ 5.980.000,-</div>
                </div>
                <div className="mapEnquiryBox">
                    <div className="map" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                        <img src={dordogne} alt="" style={{width: '100px'}}/>
                        <div className={showRegionName ? "regionName" : "regionName hide"} >Limousin</div>
                    </div>
                    <button className="enquiry"  onClick={makeEnquiry}>Make enquiry</button>
                </div>
            </div>
        </div>
    )
}

export default Content
