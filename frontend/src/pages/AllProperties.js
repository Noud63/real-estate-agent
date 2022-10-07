import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRealEstates } from '../features/estateSlice'
import { useNavigate } from "react-router-dom"
import ListItems from '../components/ListItems'
import SearchEstates from '../components/SearchEstates'
import NewsLetter from '../components/NewsLetter'
import Pagination from '../components/Pagination'
import SideBar from '../components/SideBar'
import '../sassStyles/pages/AllProperties.scss'

const AllProperties = () => {

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
    }, [dispatch, isSuccess, isError])


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
            <div className="mainContentWrapper">
                <div className="realEstatesWrapper">

                    <div className="searchbarAndListItems">
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
            <div className="content_subscription">
                <div className="news"><NewsLetter /></div>
                <div className="finance">Your add here</div>
            </div>
        </>
    )
}

export default AllProperties