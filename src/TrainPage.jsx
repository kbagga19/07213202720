import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Train from './Train';
import {useParams} from 'react-router-dom';

function TrainPage() {
    const [trainDetail, setTrainDetail] = useState(null);
    const {trainNumber} = useParams();  

    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODYzMjUyMDUsImNvbXBhbnlOYW1lIjoiRGVsaGkgQ2VudHJhbCIsImNsaWVudElEIjoiZWM3MDYxMjctODBjZi00ZWY2LTkzNDQtY2M5NDZhNmYyZGZmIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjA3MjEzMjAyNzIwIn0.pCC2XD_DpN-zbOezut00aN8cnG2F3AOWKVkDE9NTUWo'};

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
            <h2>{trainDetail.trainName}</h2>
        </div>
    </div>
  );
}

export default TrainPage;
