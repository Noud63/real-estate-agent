import React, { useState, useEffect } from 'react'
import '../sassStyles/layout/SoldProperties.scss'
import soldProps from '../assets/soldProps/soldProps'

const SoldProperties = () => {

    const [soldProperties, setSoldProperties] = useState([])
    const [loadBtn, setLoadBtn] = useState('Show More')
    const [currentSlice, setCurrentSlice] = useState(4)
    const [perPage, setPerPage] = useState(4)

    useEffect(() => {
        setSoldProperties(soldProps)
    }, [])

    const loadMore = () => {
        if (currentSlice < soldProperties.length) {
            setCurrentSlice(currentSlice + perPage)
        }

        if (currentSlice === (soldProperties.length - perPage)) {
            setLoadBtn('Show Less')
        }
        if (currentSlice === soldProperties.length) {
            setCurrentSlice(perPage)
            setLoadBtn('Show More')
        }
    }

    return (
        <div className="soldprops">
            <div className="soldprops_header">Sold Properties:</div>
            <div className="soldprops_grid">
                {soldProperties && soldProperties.slice(0, currentSlice).map(property => {
                    const { img, name, price, id, line1, line2, line3 } = property
                    return <div className="soldprops_grid_imageBox" key={id}>
                        {line1 && line2 && line3 ? <div className="message">
                            <div className="message_text"><span>{line1}</span><span>{line2}</span><span>{line3}</span><span style={{fontSize: '10px'}}>{price}</span></div>
                           </div> : "" }
                        <div className="image"><img src={process.env.PUBLIC_URL + `/soldProps/${img}`} alt="" style={{ width: '100%', height: 'auto' }} /></div>
                        <div className="footer"><span className="soldChateau">{name}</span><span className="soldPrice">{price}</span></div>
                    </div>
                })}
            </div>
            <button type="button" className="loadmoreBtn" onClick={loadMore} >{loadBtn}</button>
        </div>
    )
}

export default SoldProperties
