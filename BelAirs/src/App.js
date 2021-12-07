import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Home from './components/Home/Home';
import NewComponent from './login';
import Book from './book';
import Bok from './yourbok'

import './App.css';

function App() {
  const [data,setdata] = useState({})

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<NewComponent setdata={setdata}/>}/>
          <Route exact path='/login/success' element={<Navigate to ="/booking"/>}/>
          <Route path='/booking' element={<Book data={data}/>}/>
          <Route path='/yourbooking' element={<Bok/>}/>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
