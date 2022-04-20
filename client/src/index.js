import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/saved' element={<List/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


