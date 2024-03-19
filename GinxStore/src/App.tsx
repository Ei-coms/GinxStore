import React from 'react';
import './App.css';
import Home from './views/Home'
import {Routes, Route } from 'react-router-dom';
import Products from './views/Products';
import ToolBar from './components/Toolbar';

function App() {
  return (
    <div>
        <ToolBar/>
        <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/> 
    </Routes>
    </div>
      
  );
}

export default App;
