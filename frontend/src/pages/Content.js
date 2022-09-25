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
import frenchproperty from '../assets/images/goodlife.jpg'
import magazine2 from '../assets/images/magazine2.jpg'
import magazine3 from '../assets/images/magazine4.png'
import SoldProperties from '../components/SoldProperties'


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

    // Show message when filtered list is empty (no matching criteria)
    useEffect(() => {
        if (filtered.length === 0) {
            setNewList([])
            setErrorMessage(true)
        } else {
            setErrorMessage(false)
        }
    }, [filtered.length])

    // const highLight = (e) => {
    //      e.target.parentNode.style.opacity = 1
    // }

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

                    <div className="sidebar">

                        <div className="sidebar_content"><NewsLetter /></div>
                        <div className="sidebar_content2">
                            <div className="recentlySold">Recently Sold Properties:</div>
                            <div className="imageBox">
                                <div className="sidebarimg" ><img src={fulfillyourdream} alt="" /></div>
                                <div className="sidebartext"><span className="soldChateau">Chateau de Tourreau</span><span className="soldPrice">$5.890.000,-</span></div>
                            </div>

                            <div className="imageBox">
                                <div className="sidebarimg"><img src={fulfillyourdream2} alt=""/></div>
                                <div className="sidebartext"><span className="soldChateau">Chateau Les Carrasses</span><span className="soldPrice">$3.750.000,-</span></div>
                            </div>

                            <div className="imageBox" >
                                <a href="https://thegoodlifefrance.com/category/magazine/" target="blank">
                                    <div className="sidebarimg" style={{ opacity: '1' }}><img src={frenchproperty} alt="" /></div>
                                <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">It's free!</span></div></a>
                            </div>

                            <div className="imageBox" >
                                <a href="https://www.afrenchcollection.com/french-property-news-magazine/" target="blank">
                                    <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine2} alt="" /></div>
                                    <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$3.99 p/m</span></div></a>
                            </div>

                            <div className="imageBox" >
                                <a href="https://myfrenchcountryhomemagazine.com/product-category/digital-edition/" target="blank">
                                    <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine3} alt="" /></div>
                                    <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">$39.99 p/y</span></div></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
               
                 

            
            <div className="content_subscription">
                <div className="news"><NewsLetter /></div>
                <div className="finance">Your add here</div>
            </div>
            <div className="content_sold"><SoldProperties /></div>
            <div className="content_block2"></div>
            <div className="content_block3"></div>
        </>
    )
}

export default Content