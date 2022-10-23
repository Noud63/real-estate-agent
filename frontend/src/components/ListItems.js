import React from 'react'
import Loader from '../utilities/Loader'
import SingleProperty from './SingleProperty'

const ListItems = ({ newList, show}) => {

    return ( 
        <>
        {show ? newList.map((item, index) => {

                return (
                    <SingleProperty key={index} item={item} newList={newList}/>
                )
            }) : < Loader />}
         </>   
    )
}

export default ListItems
