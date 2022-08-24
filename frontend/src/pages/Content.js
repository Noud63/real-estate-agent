import React, { useState, useEffect, useCallback } from 'react'
import '../sassStyles/pages/content.scss'
import { useSelector, useDispatch } from 'react-redux'
import fetchData from '../features/ApiService'
import ListItems from '../components/ListItems'
import CategorySelect from '../components/CategorySelect'
import Pagination from '../components/Pagination'
import {useNavigate } from "react-router-dom"

const Content = () => {

    const [show, setShow] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(1)
    const [newList, setNewList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    

    // add page number to url
    const navigate = useNavigate();
    const path = window.location.pathname;

    useEffect(() => {
        navigate(`${path}?page=${currentNumber}`);
    }, [currentNumber, path, navigate])


    // store
    const realestates = useSelector(state => state.realestate)
    const { loading, realestate, error } = realestates


    const dispatch = useDispatch()


    //dispatch data fetched from server
    useEffect(() => {
        dispatch(fetchData())
        if (realestate.length > 0) {
            setShow(true)
        }
        if (error) {
            setErrorMessage(true)
        }
    }, [dispatch, error, realestate])


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
    }, [currentNumber, realestate])


    useEffect(() => {
        slicedList()
    }, [slicedList])


    return (
        <div className="content2">

            <CategorySelect />

            {errorMessage ? <div>{error}</div> : ""}

            <ListItems newList={newList} show={show} />

            <div className="btns">
                {pageNumbers.map(number => {
                    return <Pagination key={number} active={number === currentNumber} onClick={() => pagination(number)} title={number} />

                })}
            </div>

        </div>
    )
}

export default Content
