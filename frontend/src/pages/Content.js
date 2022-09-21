import React, { useState, useEffect } from 'react'
import '../sassStyles/pages/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getRealEstates } from '../features/estateSlice'
import ListItems from '../components/ListItems'
import SearchEstates from '../components/SearchEstates'
import Pagination from '../components/Pagination'
import { useNavigate } from "react-router-dom"
import NewsLetter from '../components/NewsLetter'
import fulfillyourdream from '../assets/images/fulfillyourdreamimg2.jpg'
import fulfillyourdream2 from '../assets/images/fulfillyourdreamimg3.jpg'


const Content = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [resPerPage, setResPerpage ] = useState(5)

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
               
            <div className="contentWrapper">

                <div className="content2">
                    <SearchEstates setCurrentNumber={setCurrentNumber} currentNumber={currentNumber}/>

                    {errorMessage ? <div className="searchError">No results match your search criteria!</div> : ""}

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

                <div className="sidebar">
                    
                    <div className="sidebar_content"><NewsLetter /></div>
                        <div className="sidebar_content2">
                          <div className="recentlySold">Recently Sold Properties:</div>
                            <div className="imageBox">
                                <div className="fulfillimg"><img src={fulfillyourdream} alt="" style={{ width: '100%', height: 'auto' }} /></div>
                                <div className="fulfilltext"><span className="soldChateau">Chateau de Tourreau</span><span className="soldPrice">$5.890.000,-</span></div>
                            </div>

                        <div className="imageBox">
                            <div className="fulfillimg"><img src={fulfillyourdream2} alt="" style={{ width: '100%', height: 'auto' }} /></div>
                            <div className="fulfilltext"><span className="soldChateau">Chateau Les Carrasses</span><span className="soldPrice">$3.750.000,-</span></div>
                        </div>
                        </div>
                    </div>
            </div>

            <div className="content_block"></div>
            <div className="content_block2"></div>
        </>
    )
}

export default Content