import React, {useEffect, useCallback} from 'react'

const Pagination = ({ number, filtered, currentNumber, setCurrentNumber, resultsPerPage, setNewList }) => {

    const paginate = (number) => {
        setCurrentNumber(number)
    }

    const slicedList = useCallback(() => {
        if (filtered.length > resultsPerPage) {
            const data2 = filtered.slice(((currentNumber - 1) * resultsPerPage), (currentNumber * resultsPerPage))
            setNewList(data2)
        }
        if (filtered.length <= resultsPerPage) {
            setNewList(filtered)
        }
    }, [currentNumber, filtered, resultsPerPage, setNewList])

    useEffect(() => {
        slicedList()
    }, [slicedList])


    return (
        <button onClick={() => paginate(number)} className={number === currentNumber ? "paginationBtn active" : "paginationBtn"}>
            <span>
                {number}
            </span>
        </button>
    );
}

export default Pagination
