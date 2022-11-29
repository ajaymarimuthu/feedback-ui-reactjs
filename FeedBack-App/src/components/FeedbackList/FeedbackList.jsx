import React from 'react'
import Feedbackitem from '../Feedbackitem/Feedbackitem'

function FeedbackList({feedback,handleDelete}) {
    // console.log(feedback);

    if(!feedback || feedback.length === 0){
        return <p>No feedback received</p>
    }
  return (
    <div className='feedback-list'>


        {feedback.map((item)=>{
            return <Feedbackitem key={item.id}
            handleDelete={handleDelete}
             id={item.id} 
            rating={item.rating}            
            text={item.text}/>
        })}
        


    </div>
  )
}

export default FeedbackList