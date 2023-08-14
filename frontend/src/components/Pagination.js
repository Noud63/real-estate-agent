import React, {useEffect, useCallback, useState} from 'react'
import { useSelector } from 'react-redux'

const Pagination = ({ currentNumber, setCurrentNumber, setNewList }) => {

    const [resPerPage] = useState(5)

     const realestates = useSelector(state => state.realestate)
    let { filtered} = realestates;

    //Number of buttons
    const pageNumbers = []
    const pages = Math.ceil(filtered.length / resPerPage)

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }

    const paginate = useCallback((number) => {
        setCurrentNumber(number)
    },[setCurrentNumber])

    const slicedList = useCallback(() => {
        if (filtered.length > resPerPage) {
            const data2 = filtered.slice(((currentNumber - 1) * resPerPage), (currentNumber * resPerPage))
            setNewList(data2)
        }
        if (filtered.length <= resPerPage) {
            setNewList(filtered)
        }
    }, [currentNumber, filtered, resPerPage, setNewList])

    useEffect(() => {
        slicedList()
    }, [slicedList])


    return (
        <>
         {pageNumbers.map(number => {
           return <button onClick={() => paginate(number)} className={number === currentNumber ? "paginationBtn active" : "paginationBtn"} key={number}>
            <span>
                {number}
            </span>
        </button>
       })}
         </>
    );
    
}

export default Pagination
