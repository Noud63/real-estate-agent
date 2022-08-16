import React, { useState } from 'react'
import '../sassStyles/layout/content.scss'
import '../sassStyles/utils/Map.scss'

const Map = ({ region, map }) => {

    const [showRegionName, setShowRegionName] = useState(false)

    const handleMouseOver = () => {
        setShowRegionName((prev) => !prev);
    }

    const makeEnquiry = () => {
        console.log('Enquire')
}

    return (
        <div className="mapEnquiryBox">
            <div className="map" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                <img src={map} alt="map" />
                    <div className={showRegionName ? "regionName" : "regionName hide"} >{region}</div>
                </div>
            <button className="enquiry" onClick={makeEnquiry}>Make enquiry</button>
        </div>
    )
}

export default Map
