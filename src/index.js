import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './Components/List';
import Cook from './Components/Cook';
import Navbar from './Components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
     <Router>
     <Navbar/>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<List />} />
      <Route path='/cook' element={<Cook />}/>
      </Routes>
    </Router>
    </>

  </React.StrictMode>
);
