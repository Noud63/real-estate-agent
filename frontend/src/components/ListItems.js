import React,{useEffect, useState} from 'react'
import Loader from '../utilities/Loader'
import SingleProperty from './SingleProperty'
import { useSelector, useDispatch } from 'react-redux'

const ListItems = ({ newList, show}) => {
    return ( 
        <>
        {show ? newList.map((item, index) => {

                return (
                    <SingleProperty key={index} item={item} newList={newList} />
                )
            }) : < Loader />}
         </>   
    )
}

export default ListItems
