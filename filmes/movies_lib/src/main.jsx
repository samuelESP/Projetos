import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movie from './pages/Movie';
import Home from './pages/Home';
import Search from './pages/Search';

import './index.css'
import { GlobalStyle } from './global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
