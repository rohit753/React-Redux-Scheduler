// import logo from './logo.svg';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Nvbar from './components/Nvbar';
// import { Switch } from "react-router-dom"
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      {/* add */}
      {/* edit/:id */}

      <ToastContainer />
      <Nvbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
