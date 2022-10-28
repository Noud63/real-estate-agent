import React, { useState, useEffect } from 'react';
import like from '../assets/icons/like.png'
import { useSelector, useDispatch } from 'react-redux'
import likeRed from '../assets/icons/likeRed.png'
import { filteredProperties } from '../features/estateSlice'

const Likes = ({ id }) => {

    const [likes, setLikes] = useState(false)

    const likesHandler = (id) => {
           setLikes(prev => !prev)
    }

    return (
        <div className="like" onClick={() => likesHandler(id)}>
            <img src={likes ? likeRed : like} alt="" className="like_icon" />
        </div>
    )
}

export default Likes
