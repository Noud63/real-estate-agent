import React, { useState, useEffect, useCallback } from 'react'
import '../sassStyles/pages/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProperties, getRealEstates } from '../features/estateSlice'
import ListItems from '../components/ListItems'
import CategorySelect from '../components/CategorySelect'
import Pagination from '../components/Pagination'
import { useNavigate } from "react-router-dom"

const Content = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])

    // add page number to url
    const navigate = useNavigate();
    const path = window.location.pathname;

    const dispatch = useDispatch()

    useEffect(() => {
        navigate(`${path}?page=${currentNumber}`);
    }, [currentNumber, path, navigate])


    const realestates = useSelector(state => state.realestate)
    const { isLoading, realestate, filter, isError, message, isSuccess} = realestates;

    useEffect(() => {
        dispatch(getRealEstates())
        if (realestate) {
            setShow(true)
        } else {
            console.log('No data retrieved')
        }
    }, [dispatch])



    // pagination 
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
    }, [currentNumber, realestate, resultsPerPage])


    useEffect(() => {
        slicedList()
    }, [slicedList])


    return (
        <>
            <div className="borderTop">
                <div className="border"></div>
            </div>
            <div className="sidebarContentWrapper">

                <div className="sidebar"></div>

                <div className="content2">

                    <CategorySelect />

                    <ListItems newList={newList} show={show}/>

                    <div className="btns">
                        {pageNumbers.map(number => {
                            return <Pagination key={number} active={number === currentNumber} onClick={() => pagination(number)} title={number} />

                        })}
                    </div>

                </div>
                <div className="sidebar2"></div>
            </div>
        </>
    )
}

export default Content
