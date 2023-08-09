import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRealEstates } from '../features/estateSlice'
import { useNavigate } from "react-router-dom"
import ListItems from '../components/ListItems'
import SearchEstates from '../components/SearchEstates'
import NewsLetter from '../components/NewsLetter'
import Pagination from '../components/Pagination'
import SideBar from '../components/SideBar'
import Magazines from '../components/Magazines'
import '../sassStyles/pages/AllProperties.scss'

const AllProperties = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    

    // add page number to url
    // const navigate = useNavigate();
    // const path = window.location.pathname;

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     navigate(`${path}?page=${currentNumber}`);
    // }, [currentNumber, path, navigate])


    const realestates = useSelector(state => state.realestate)
    let { isLoading, realestate, filtered, isError, isSuccess, message } = realestates;

    useEffect(() => {
       if(isSuccess){
            setShow(true)
        }
    }, [isSuccess])


    // Show message when filtered list is empty (no matching search criteria), or no data at all.
   
    return (
        <>
            <div className="mainContentWrapper">
                <div className="realEstatesWrapper">

                    <div className="searchbarAndListItems">

                        <SearchEstates 
                            setCurrentNumber={setCurrentNumber} 
                            currentNumber={currentNumber} 
                            filtered={filtered} 
                            setNewList={setNewList} 
                            setErrorMessage={setErrorMessage}
                        />

                        {errorMessage ? <div className="searchError">No results match your search criteria!</div> : ""}

                        <ListItems newList={newList} show={show} />

                        <div className="btns">
                            <Pagination 
                            filtered={filtered}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                            newList={newList}
                            setNewList={setNewList}
                            />
                        </div>
                    </div>

                    <SideBar />

                </div>
            </div>

            <div className="content_subscription">
               <NewsLetter className="news"/>
                <div className="finance">Free Advertising Space</div>
            </div>

            <Magazines />
        </>
    )
}

export default AllProperties