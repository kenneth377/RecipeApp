
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import { Navigate, Router, useNavigate } from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
