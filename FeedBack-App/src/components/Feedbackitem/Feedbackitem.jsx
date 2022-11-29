import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Feedbackitem.css'
import { useState } from 'react'
import Card from '../Shared/Card'



function Feedbackitem({ rating, text ,id,handleDelete}) {

  return (
    // <div className='card'>
    <Card>
       <div className="num-display">{rating}</div>
       <button onClick={()=>handleDelete(id) } className="close">
        <FaTimes color='purple'/>
       </button>
      <div className="text-display"> <p>{text} </p>  </div>


    </Card>
     
    // </div>
  )
}

export default Feedbackitem