import React, { useState } from 'react'
import bedroomsIcon from '../assets/icons/bedrooms.png'
import bathroomsIcon from '../assets/icons/bathrooms.png'
import livingspaceIcon from '../assets/icons/livingspace.png'
import areaIcon from '../assets/icons/area.png'
import Map from './Map'
import EnquiryForm from './EnquiryForm'
import '../sassStyles/layout/singleproperty.scss'


const SingleProperty = ({ id, area, bathrooms, bedrooms, city, departement, region, img, livingspace, map, name, price }) => {

    const [expand, setExpand] = useState(false)
    const [showForm, setShowForm] = useState(false)

    return (
        <div className={!expand ? "content2_property" : "content2_property enlarge"} key={id}>

            <div className="content2_property_castleImageBox"><img src={img} alt="castle" className="content2_property_castleImage" /></div>

            <div className="content2_property_info">

                <div className="title"><h5>{name}</h5></div>

                <div className="location">
                    <div><span>Region:</span> {region}</div>
                    <div><span>Departement:</span> {departement}</div>
                    <div><span>City:</span> {city}</div>
                </div>

                <div className="icons">
                    <div className="icon">{bedrooms}<img src={bedroomsIcon} alt="" /></div>
                    <div className="icon">{bathrooms} <img src={bathroomsIcon} alt="" /></div>
                    <div className="icon">{livingspace}<img src={livingspaceIcon} alt="" /></div>
                    <div className="icon">{area}ha<img src={areaIcon} alt="" /></div>
                </div>

                <div className="price"><span>Price:</span> {price === 'Not for Sale' ? price : `$${price},-`}</div>

            </div>

            <Map region={region} map={map} setExpand={setExpand} setShowForm={setShowForm} />

            {showForm ? <EnquiryForm showForm={showForm} setShowForm={setShowForm} setExpand={setExpand} propertyName={name} /> : ""}

        </div>
    )
}

export default SingleProperty
