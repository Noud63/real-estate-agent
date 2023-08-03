import React, { useState, useEffect } from 'react';
import like from '../assets/icons/like.png'
import { useSelector, useDispatch } from 'react-redux'
import likeRed from '../assets/icons/likeRed.png'
import { updatedProperty } from '../features/estateSlice';

const Likes = ({ id, newList }) => {

    const [liked, setLiked] = useState(false)

    const realestates = useSelector(state => state.realestate)
    let { isLoading, realestate, filtered, isError, isSuccess, message } = realestates;

    const dispatch = useDispatch()

    const likesHandler = (id) => {

    filtered.forEach( estate => {
               if(estate._id === id && liked === false){
                    setLiked(true)
                    dispatch(updatedProperty({...estate, like:true}))
                    }
                if(estate._id === id && liked === true ){
                    setLiked(false)
                    dispatch(updatedProperty({...estate, like:false}))
                   }
           })
       }

    //    useEffect(()=> {
    //       localStorage.setItem('filtered', JSON.stringify(filtered))
    //    },[filtered])

return (
        <div className="like" onClick={() => likesHandler(id)}>
            <img src={liked ? likeRed : like} alt="" className="like_icon" />
        </div>
    )
}

export default Likes
