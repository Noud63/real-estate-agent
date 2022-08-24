import React from 'react'

const Pagination = ({ active, onClick, title }) => {
    return (
        <button onClick={onClick} className={active ? "paginationBtn active" : "paginationBtn"}>
            <span>
                {title}
            </span>
        </button>
    );
}

export default Pagination
