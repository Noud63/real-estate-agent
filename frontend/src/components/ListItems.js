import React, {useState, useEffect} from 'react'
import Loader from '../features/Loader'
import SingleProperty from './SingleProperty'

const ListItems = ({ newList, show }) => {

    return ( 
        <>
        {show ? newList.map(item => {

                const { _id, area, bathrooms, bedrooms, city, departement, region, img, livingspace, map, name, price } = item;

                return (
                    <SingleProperty key={_id} id={_id} area={area} bathrooms={bathrooms} bedrooms={bedrooms} city={city} 
                    departement={departement} region={region} img={img} livingspace={livingspace} map={map} name={name} price={price}/>
                )
            }) : < Loader />}
         </>   
    )
}

export default ListItems
