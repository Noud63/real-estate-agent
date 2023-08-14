import React, { useState, useEffect } from 'react';
import like from '../assets/icons/like.png'
import { useSelector, useDispatch } from 'react-redux'
import likeRed from '../assets/icons/likeRed.png'
import { filteredProperties, updatedProperty } from '../features/estateSlice';

const Likes = ({ id, likedItem }) => {

    const [liked, setLiked] = useState(false)

    const realestates = useSelector(state => state.realestate)
    let { filtered } = realestates;

    const dispatch = useDispatch()

    const likesHandler = (id) => {

   filtered.forEach( estate => {
               if(estate._id === id){
                if(!liked){
                    setLiked(true)
                    dispatch(updatedProperty({...estate, like:!liked}))
                }else{
                     setLiked(false)
                    dispatch(updatedProperty({...estate, like:!liked}))
                }
            }
          })
        }

      useEffect(()=> {
        if(likedItem === false){
            setLiked(false)
        }else{
            setLiked(true)
        }
      },[likedItem])

return (
        <div className="like" onClick={() => likesHandler(id)}>
            <img src={liked ? likeRed : like} alt="" className="like_icon" />
        </div>
    )
}

export default Likes
