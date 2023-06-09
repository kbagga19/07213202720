import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Train from './Train';
import {useParams} from 'react-router-dom';

function TrainPage() {
    const [trainDetail, setTrainDetail] = useState(null);
    const {trainNumber} = useParams();  

    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODYzMjU1MTYsImNvbXBhbnlOYW1lIjoiRGVsaGkgQ2VudHJhbCIsImNsaWVudElEIjoiZWM3MDYxMjctODBjZi00ZWY2LTkzNDQtY2M5NDZhNmYyZGZmIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjA3MjEzMjAyNzIwIn0.1fau66xg-57qzD5-EnNk3Oeh1HUjBCsYp33iW_b4JDg'};

  useEffect(() => {
    fetch(`http://104.211.219.98/train/trains/${trainNumber}`, {headers})
    .then(response => {
        response.json().then(trainDetail => {
            setTrainDetail(trainDetail);
          });
    })
    
},[]);
    if(!trainDetail) return '';
    console.log(trainDetail)

  return (
    <div className="App">
        <div className='trains_data'>
        <h1 className="train_name">Train Name: {trainDetail.trainName}</h1>
        <h3>Train Number: {trainDetail.trainNumber}</h3>
        <h5>Deaparture Time: {trainDetail.departureTime.Hours}:{trainDetail.departureTime.Minutes}:{trainDetail.departureTime.Seconds}</h5>
        <h5>Delayed By: {trainDetail.delayedBy}</h5>

        </div>
    </div>
  );
}

export default TrainPage;
