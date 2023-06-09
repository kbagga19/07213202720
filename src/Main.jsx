import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Train from './Train';

function Main() {
  const [trains, setTrains] = useState([]);
  const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODYzMjUyMDUsImNvbXBhbnlOYW1lIjoiRGVsaGkgQ2VudHJhbCIsImNsaWVudElEIjoiZWM3MDYxMjctODBjZi00ZWY2LTkzNDQtY2M5NDZhNmYyZGZmIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjA3MjEzMjAyNzIwIn0.pCC2XD_DpN-zbOezut00aN8cnG2F3AOWKVkDE9NTUWo' };

  useEffect(() => {
    fetch('http://104.211.219.98:80/train/trains', {headers})
    
    .then(response => {
      
      response.json().then(trains => {
        setTrains(trains);
      });
  });
}, []);
console.log(trains)

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
