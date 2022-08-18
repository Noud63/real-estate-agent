import React, { useState } from 'react'
import '../sassStyles/layout/content.scss'
import '../sassStyles/utils/Map.scss'

const Map = ({ region, map, setExpand, expand, setShowForm }) => {

    const [showRegionName, setShowRegionName] = useState(false);

    const handleMouseOver = () => {
            setShowRegionName((prev) => !prev);
    }

    const makeEnquiry = () => {
        setExpand(true)
        setTimeout(()=> {
            setShowForm(true)
        }, 500)
    }

    return (
        <div className="mapEnquiryBox">
            <div className="map" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
                <img src={map} alt="map" />
                <div className={showRegionName ? "regionName" : "regionName hide"} >{region}</div>
            </div>
            <button className="enquiry" disabled={expand} onClick={makeEnquiry}>Make enquiry</button>
        </div>
    )
}

export default Map