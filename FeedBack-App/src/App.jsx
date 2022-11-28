import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList/FeedbackList'

function App() {

  const[feedback,setfeedback]=useState(FeedbackData);


  return (

    <div className='main'>
      <Header  />
      <div className="container">
        <FeedbackList  feedback={feedback}/>
      </div>

    </div>


  )
}

export default App
