import React, { useState, useEffect } from 'react';
import like from '../assets/icons/like.png'
import { useSelector, useDispatch } from 'react-redux'
import likeRed from '../assets/icons/likeRed.png'
import { updatedProperty } from '../features/estateSlice';
import { getRealEstates } from '../features/estateSlice';

const Likes = ({ id, likedItem, newList }) => {

    const [liked, setLiked] = useState(false)

    const realestates = useSelector(state => state.realestate)
    let { isLoading, realestate, filtered, isError, isSuccess, message } = realestates;

    const dispatch = useDispatch()

    const likesHandler = (id) => {

   newList.forEach( estate => {
               if(estate._id === id){
                if(liked === false){
                    setLiked(true)
                    dispatch(updatedProperty({...estate, like:true}))
                }else if(liked === true){
                     setLiked(false)
                    dispatch(updatedProperty({...estate, like:false}))
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
      },[])

return (
        <div className="like" onClick={() => likesHandler(id)}>
            <img src={liked ? likeRed : like} alt="" className="like_icon" />
        </div>
    )
}

export default Likes
