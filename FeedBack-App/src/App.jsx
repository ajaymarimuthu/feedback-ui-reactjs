import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList/FeedbackList'

import Feedbackstats from './components/Feedbackstats/Feedbackstats'

 
function App() {

  const[feedback,setfeedback]=useState(FeedbackData);

  const deleteFeedback = (id) =>{
    // console.log("App", id);

    if(window.confirm("Are you sure to delete the data?")){

      setfeedback(feedback.filter((item) => (
        item.id!==id
      )  ))
    }
    
  }


  return (

    <div className='main'>
      <Header  />
      <div className="container">

        <Feedbackstats feedback={feedback}/>

        <FeedbackList  feedback={feedback}
        handleDelete={deleteFeedback}  />

      </div>

    
    </div>


  )
}

export default App
