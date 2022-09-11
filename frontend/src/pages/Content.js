import React, { useState, useEffect, useCallback } from 'react'
import '../sassStyles/pages/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getRealEstates } from '../features/estateSlice'
import ListItems from '../components/ListItems'
import CategorySelect from '../components/CategorySelect'
import SearchEstates from '../components/SearchEstates'
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
    let { isLoading, realestate, filtered, isError, message, isSuccess } = realestates;

    console.log('filtered', filtered)

    useEffect(() => {
        dispatch(getRealEstates())
        if (filtered) {
            setShow(true)
        } else {
            console.log('No data retrieved')
        }
    }, [dispatch])


    //Pagination
    const pageNumbers = []
    const resultsPerPage = 5
    const pages = Math.ceil(filtered.length / resultsPerPage)

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }


    return (
        <>
            <div className="borderTop">
                <div className="border"></div>
            </div>
            <div className="sidebarContentWrapper">

                <div className="sidebar"></div>

                <div className="content2">

                    <SearchEstates/>

                    <ListItems newList={newList} show={show} />

                    <div className="btns">
                        {pageNumbers.map(number => {
                            return <Pagination key={number}
                                number={number}
                                filtered={filtered}
                                currentNumber={currentNumber}
                                setCurrentNumber={setCurrentNumber}
                                resultsPerPage={resultsPerPage}
                                newList={newList}
                                setNewList={setNewList}
                            />
                        })}
                    </div>

                </div>
                <div className="sidebar2"></div>
            </div>
        </>
    )
}

export default Content