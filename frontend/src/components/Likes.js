import React, { useState } from 'react';
import like from '../assets/icons/like.png'
import likeRed from '../assets/icons/likeRed.png'

const Likes = ({ id }) => {

    const [likes, setLikes] = useState(false)

    const likesHandler = () => {
        setLikes(prev => !prev)
    }

    return (
        <div className="like" onClick={() => likesHandler(id)}>
            <img src={likes ? likeRed : like} alt="" className="like_icon" />
        </div>
    )
}

export default Likes
