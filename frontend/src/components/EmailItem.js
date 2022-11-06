import React from 'react'
import deleteIcon from '../assets/icons/close2.png'

const emailItem = ({email, id, deleteEmail, isLoading}) => {
    return (
        
        <div className="user" id={id} key={id}>
            {email}
            <span>
                <img src={deleteIcon} alt="delete" style={{ height: "20px", cursor: "pointer" }} onClick={(e) => deleteEmail(id, e)} />
            </span>
        </div>
    )
}

export default emailItem
