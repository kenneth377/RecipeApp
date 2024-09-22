import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './Components/List';
import Cook from './Components/Cook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<List />} />
      <Route path='/cook' element={<Cook />}/>
      </Routes>
    </Router>

  </React.StrictMode>
);
