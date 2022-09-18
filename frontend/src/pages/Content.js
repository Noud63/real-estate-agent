import React, { useState, useEffect } from 'react'
import '../sassStyles/pages/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getRealEstates } from '../features/estateSlice'
import ListItems from '../components/ListItems'
import SearchEstates from '../components/SearchEstates'
import Pagination from '../components/Pagination'
import { useNavigate } from "react-router-dom"
import NewsLetter from '../components/NewsLetter'


const Content = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [resPerPage, setResPerpage ] = useState(7)

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
        } else if (isError){
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


    // Show message when filtered list is empty
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
            <div className="borderTop">
                <div className="headerMenu">
                    <div className="headerMenu_item">Home</div>
                    <div className="headerMenu_item">Buy</div>
                    <div className="headerMenu_item">Service</div>
                    <div className="headerMenu_item">Finance</div>
                    <div className="headerMenu_item">News</div>
                    <div className="headerMenu_item">Currency</div>
                </div>
            </div>
               
            <div className="sidebarContentWrapper">
               

                <div className="sidebar">
                    <div className="frame"><NewsLetter /></div>
                    <div className="frame2">
                        <div className="frame2_sold">SOLD</div>
                    </div>
                </div>


                <div className="content2">
                    <SearchEstates />

                    {errorMessage ? <div>No results match your search criteria!</div> : ""}

                    <ListItems newList={newList} show={show}/>

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

                        {/* <div className="sidebar2">
                            <div className="frame"></div>
                        </div> */}
                
            </div>
            <div className="blockBottom"></div>
            <div className="blockBottom2"></div>
        </>
    )
}

export default Content