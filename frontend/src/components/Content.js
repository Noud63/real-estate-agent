import React, { useState, useEffect, useCallback } from 'react'
import '../sassStyles/layout/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import fetchData from '../features/ApiService'
import ListItems from './ListItems'

const Content = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)

    const realestates = useSelector(state => state.realestate)
    const { loading, realestate, error } = realestates

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
        if (realestate.length > 0) {
            setShow(true)
        }
        if (error) {
            setErrorMessage(true)
        }
    }, [dispatch, error, realestate])


    const pageNumbers = []
    const resultsPerPage = 4
    const pages = Math.ceil(realestate.length / resultsPerPage)

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }

    const pagination = (number) => {
        setCurrentNumber(number)
    }

    const slicedList = useCallback(() => {
        const data2 = realestate.slice(((currentNumber - 1) * resultsPerPage), (currentNumber * resultsPerPage))
        setNewList(data2)
        
    }, [currentNumber, realestate])


    useEffect(() => {
        slicedList()
    }, [slicedList])


    return (
        <div className="content2">
            {errorMessage ? <div>{error}</div> : ""}

           <ListItems newList={newList} show={show}/>

            <div className="btns">
                {pageNumbers.map((number, index) => {
                    return (number === currentNumber) ? <button className="paginationBtn active" onClick={() => pagination(number)} key={index} >{number}</button> :
                        <button className="paginationBtn" onClick={() => pagination(number)} key={index} >{number}</button>
                })}
            </div>
        </div>
    )
}

export default Content


// {pageNumbersArray.map(pageNumber => (
//     < PaginationButton key={ pageNumber } active={ pageNumber === currentPage} disabled={ false} onClick = {() => handlePageChange(pageNumber)} title={ pageNumber }/>
//           ))}

// export default function PaginationButton({ title, onClick, active, disabled }) {
//     return (
//         <button onClick={disabled ? null : onClick}>
//             <span>
//                 {title}
//             </span>
//         </button>
//     );
// }