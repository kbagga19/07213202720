import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';

const Train = ({trainName, trainNumber, departureTime, seatsAvailable, delayedBy}) => {
    

  return (
    <div className='trains'>
        
        <h1 className="train_name">Train Name: {trainName}</h1>
        <h3>Train Number: {trainNumber}</h3>
        <h5>Deaparture Time: {departureTime.Hours}:{departureTime.Minutes}:{departureTime.Seconds}</h5>
        <h5>Delayed By: {delayedBy}</h5>
        <Link to={`http://localhost:3000/trains/${trainNumber}`}><button>Show</button></Link>
    </div>
  )
}

export default Train
