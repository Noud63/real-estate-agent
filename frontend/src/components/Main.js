import React, { useState } from 'react'
import header from '../assets/images/header.jpg'
import '../sassStyles/layout/main.scss'
import award from '../assets/icons/award.png'
import heart from '../assets/icons/heartgrey.png'
import heartred from '../assets/icons/heartred.png'
import arrow from '../assets/icons/arrow.png'
import RatingButtons from './RatingButtons'

const Main = () => {

    const [rating, setRating] = useState(0)
    const [fav, setFav] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const nums = [0, 1, 2, 3, 4, 5]

    const rate = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const share = () => {
        console.log("Share url")
    }

    const favorite = () => {
        setFav(!fav)
    }


    return (
        <div className="container">

            {showModal ? <div className="voteModal">

                <div className="voteModal_content">

                    <div className="voteModal_content_box">
                        <div className="pickANumber">Pick a number:</div>
                        <div className="closeModal" onClick={closeModal}>Close X</div>
                    </div>

                    <div className="voteModal_content_numbers">
                        {nums.map(num => {
                            return <RatingButtons num={num} setRating={setRating} key={num} />
                        })}
                    </div>

                </div>
            </div> : ""}

            <div className="vote">

                <button type="button" className="vote_number" onClick={rate} >
                    <span className="rating">{rating}</span>
                    <span className="rate-us">rate us</span>
                </button>

                <button type="button" className="vote_share" onClick={share}>
                    <img src={arrow} alt="" style={{ width: '12px' }} />
                    <span className="rate-us">share</span>
                </button>

                <button type="button" className="vote_like" onClick={favorite}>
                    <img src={!fav ? heart : heartred} alt="" style={{ width: '20px' }} />
                    <span className="rate-us">fav</span>
                </button>

            </div>

            <div className="homepage_image">
                <div className="awards"><img src={award} alt="" className="award" /></div>
                    <div className="your_dream">
                        <span className="castlesandchateaux">Castles & Chateaux</span>
                        <span className="luxury_real_estate">Luxury real estate in France with Ellie Castelli</span>
                    </div>
                    <img src={header} alt="" className="c5_image" />
            </div>

        </div>
    )
}

export default Main


    // < select style = {{ width: '100%' }} onChange = {(e) => setRating(e.target.value)} value = {  } >
    //                <option defaultValue>0</option>
    //                <option value="1">1</option>
    //                <option value="2">2</option>
    //                <option value="3">3</option>
    //                <option value="4">4</option>
    //                <option value="5">5</option>
    //                <option value="6">6</option>
    //                <option value="7">7</option>
    //                <option value="8">8</option>
    //                <option value="9">9</option>
    //                <option value="10">10</option>
    //            </ >