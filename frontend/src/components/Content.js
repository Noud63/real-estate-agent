import React, { useState, useEffect, useCallback } from 'react'
import '../sassStyles/layout/content.scss'
import bedroomsIcon from '../assets/icons/bedrooms.png'
import bathroomsIcon from '../assets/icons/bathrooms.png'
import livingspaceIcon from '../assets/icons/livingspace.png'
import areaIcon from '../assets/icons/area.png'
import data from '../data'
import Map from './Map'


const Content = () => {

    const pageNumbers = []
    const resultsPerPage = 4
    const pages = Math.ceil(data.length / resultsPerPage)

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }

    const [ currentNumber, setCurrentNumber ] = useState(1)
    const [ newList, setNewList] = useState([])

    const pagination = (number) => {
        setCurrentNumber(number)
    }

    const slicedList = useCallback(() => {
        const data2 = data.slice(((currentNumber - 1) * resultsPerPage), (currentNumber * resultsPerPage))
        setNewList(data2)
    },[currentNumber])

    useEffect(()=> {
        slicedList()
    },[slicedList])

    return (
        <div className="content2">
            {newList.map( item => {

                const { id, area, bathrooms, bedrooms, city, departement, region, img, livingspace, map, name, price } = item;

                return (
                    <div className="content2_property" key={id}>
                        <div className="content2_castleImageBox"><img src={img} alt="" className="content2_castleImage" /></div>
                        <div className="content2_info">
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
                            <div className="price"><span>Price:</span> {item.price === 'Not for Sale' ? price : `$${price},-` }</div>
                        </div>

                        <Map region={region} map={map}/>

                    </div>
                )
            })}

            <div className="btns">
                {pageNumbers.map( (number, index) => {
                    return (number === currentNumber) ? <button className="paginationBtn active" onClick={() => pagination(number)} key={index} >{number}</button>:
                        <button className="paginationBtn" onClick={() => pagination(number)} key={index} >{number}</button>
                })}
            </div>
        </div>
    )
}

export default Content
