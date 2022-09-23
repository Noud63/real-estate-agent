import React, {useState, useEffect} from 'react'
import '../sassStyles/layout/SoldProperties.scss'
import soldProps from '../assets/soldProps/soldProps'

const SoldProperties = () => {

    const [ soldProperties, setSoldProperties ] = useState([])
    const [ loadBtn, setLoadBtn ] = useState('Show More')
    const [ currentSlice, setCurrentSlice ] = useState(3)


   useEffect(()=> {
       setSoldProperties(soldProps.slice(0, currentSlice))
   }, [currentSlice])


   const loadMore = () => {
       if (soldProperties.length < soldProps.length){
           setCurrentSlice(currentSlice + 3)
           setSoldProperties(soldProps.slice(0, currentSlice))
           setLoadBtn('Show More')

           if (soldProperties.length === 6){
               setLoadBtn('Show Less')
           }
       }

       if (soldProperties.length === soldProps.length){
           setCurrentSlice(currentSlice - 6)
           setSoldProperties(soldProps.slice(0, currentSlice))
           setLoadBtn('Show More')
       }
}

    
    return (
        <div className="soldprops">
            <div className="soldprops_header">Sold Properties:</div>
            <div className="soldprops_grid">
                {soldProperties && soldProperties.map(property => {
                    const { img, name, price, id } = property
                    return <div className="soldprops_grid_imageBox" key={id}>
                        <div className="image"><img src={process.env.PUBLIC_URL + `/soldProps/${img}`} alt="" style={{ width: '100%', height: 'auto' }} /></div>
                        <div className="footer"><span className="soldChateau">{name}</span><span className="soldPrice">${price},-</span></div>
                    </div>
                })}

            </div>
            <button type="button" className="loadmoreBtn" onClick={loadMore} >{loadBtn}</button>
        </div>
    )
}

export default SoldProperties
