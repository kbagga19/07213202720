import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Train from './Train';
import {Route , Routes} from 'react-router-dom';
import Main from './Main.jsx';
import TrainPage from './TrainPage.jsx';


export default function App() {
  

  return (
    <div>
        <Routes>
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='/trains/:id' element={<TrainPage/>}></Route>
        </Routes>
    </div>
  );
}


