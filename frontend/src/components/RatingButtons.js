import React, {useState} from 'react'
import '../sassStyles/layout/ActiveBtn.scss'

const RatingButtons = ({ num, setRating }) => {

    const [activeBtn, setActiveBtn] = useState(false)

    const yourRating = (e) => {
        setRating(e.target.textContent)
       setActiveBtn(true)
       const timer = setTimeout(()=> {
           setActiveBtn(false)
           return () => {
               clearTimeout(timer)
           }
       }, 200)
   }

    return (
        <div onClick={yourRating} className={!activeBtn ? "num" : "num clicked"}>{num}</div>
    )
}

export default RatingButtons
