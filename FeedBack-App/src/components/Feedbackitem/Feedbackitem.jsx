import React from 'react'
import './Feedbackitem.css'
import {useState} from 'react'
import Button from '@mui/material/Button';


function Feedbackitem({rating,text}) {

 
 

  return (
    <div className='card'>
      <div className="num-display">{rating}</div>

      <div className="text-display">
        <p>{text} </p>      
      </div>

    </div>
  )
}

export default Feedbackitem