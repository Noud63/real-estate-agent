import React, { useState } from 'react'
import '../sassStyles/layout/content.scss'

const Map = ({ region, map }) => {

    const [showRegionName, setShowRegionName] = useState(false)

    const handleMouseOver = () => {
        setShowRegionName((prev) => !prev)
    }

    const makeEnquiry = () => {
        console.log('Enquiry')
    }

    return (
        <div className="mapEnquiryBox">
            <div className="map" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
                <img src={map} alt="" />
                <div className={showRegionName ? "regionName" : "regionName hide"} >{region}</div>
            </div>
            <button className="enquiry" onClick={makeEnquiry}>Make enquiry</button>
        </div>
    )
}

export default Map
