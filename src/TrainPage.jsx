import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Train from './Train';

function TrainPage() {

  useEffect(() => {
    // fetch(`https://pawsitivelypets-api.onrender.com/post/${id}`)
    fetch(`http://104.211.219.98/train/trains/${trainNumber}`)
    .then(response => {
        response.json().then(postInfo => {
            setPostInfo(postInfo);
        })
    })
},[]);


  return (
    <div className="App">
        <div className='trains_data'>
           {
            trains.length > 0 && trains.map(train => ( 
                <Train {...train}/>
            ))
         }
        </div>
    </div>
  );
}

export default Main;



useEffect(() => {
    // fetch(`https://pawsitivelypets-api.onrender.com/post/${id}`)
    fetch(`http://localhost:3001/post/${id}`)
    .then(response => {
        response.json().then(postInfo => {
            setPostInfo(postInfo);
        })
    })
},[]);