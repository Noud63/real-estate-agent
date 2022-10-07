import React from 'react'
import '../sassStyles/utils/Loader.scss'
import loader from '../assets/icons/loading.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loader" style={{ width: '50px' }} />
        </div>
    )
}

export default Loader
