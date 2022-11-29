import React from 'react'

function Feedbackstats({feedback}) {

  let average=feedback.reduce((acc,curr)=>{

    return acc+curr.rating

  },0)/feedback.length


  average=average.toFixed(1).replace(/[.,]0$/, '');

  // console.log(average);

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average)? 0:average} </h4>

    </div>
  )
}

export default Feedbackstats
 