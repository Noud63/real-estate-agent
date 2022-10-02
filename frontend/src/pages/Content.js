import React, { useState, useEffect } from 'react'
import '../sassStyles/pages/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getRealEstates } from '../features/estateSlice'
import ListItems from '../components/ListItems'
import SearchEstates from '../components/SearchEstates'
import Pagination from '../components/Pagination'
import { useNavigate } from "react-router-dom"
import NewsLetter from '../components/NewsLetter'
import SoldProperties from '../components/SoldProperties'
import HeaderMenu from '../components/HeaderMenu'
import SideBar from '../components/SideBar'
import 'react-tippy/dist/tippy.css'


const Content = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [resPerPage, setResPerpage] = useState(5)

    // add page number to url
    const navigate = useNavigate();
    const path = window.location.pathname;

    const dispatch = useDispatch()

    useEffect(() => {
        navigate(`${path}?page=${currentNumber}`);
    }, [currentNumber, path, navigate])


    const realestates = useSelector(state => state.realestate)
    let { isLoading, realestate, filtered, isError, isSuccess, message } = realestates;


    useEffect(() => {
        dispatch(getRealEstates())
        if (isSuccess) {
            setShow(true)
        } else if (isError) {
            console.log('No data!')
        }
    }, [dispatch, isSuccess])


    //Pagination
    const pageNumbers = []
    const resultsPerPage = resPerPage
    const pages = Math.ceil(filtered.length / resultsPerPage)

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }

    // Show message when filtered list is empty (no matching criteria)
    useEffect(() => {
        if (filtered.length === 0) {
            setNewList([])
            setErrorMessage(true)
        } else {
            setErrorMessage(false)
        }
    }, [filtered.length])

    return (
        <>
          <HeaderMenu />
            <div className="mainContentWrapper">
                <div className="realEstatesWrapper">

                    <div className="content2">
                        <SearchEstates setCurrentNumber={setCurrentNumber} currentNumber={currentNumber} />
                        {errorMessage ? <div className="searchError">No results match your search criteria!</div> : ""}
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

                    <SideBar />

                </div>
            </div>

            

            <div className="content_sold"><SoldProperties /></div>
            <div className="content_subscription">
                <div className="news"><NewsLetter /></div>
                <div className="finance">Your add here</div>
            </div>
            <div className="content_block2"></div>
            <div className="content_block3"></div>
            <div className="content_block4"></div>
            <div className="content_block2"></div>
            <div className="content_block5"></div>
            <div className="content_block6"></div>
            
        </>
    )
}

export default Content