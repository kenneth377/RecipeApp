import React, { useContext } from 'react';
import Navbar from './Navbar';
import "./styles/land.css"
import Landmore from './Landmore';
import { Navcontext } from '../Navigatecontext';
import { useNavigate } from 'react-router-dom';

export default function Land() {
  const navigate = useNavigate()
  return (
    <>
       {/* <Navbar /> */}
       <Navcontext.Provider value={navigate}>

       <Landmore />
       </Navcontext.Provider>
       </>
  )
}
