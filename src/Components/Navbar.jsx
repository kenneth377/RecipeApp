import React, { useContext, useState } from 'react'
import "./styles/navbar.css"
import {  ImSearch } from 'react-icons/im';
import { GoPerson } from "react-icons/go";
import { useNavigate,useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import logojson from "./logo.json"
import { Screensize } from '../screen';
import { FaBars, FaClosedCaptioning } from 'react-icons/fa';
import { RiCloseLargeFill } from 'react-icons/ri';


export default function Navbar() {
  const [isearchable, setIsearchable] = useState(false)
  const [trackinpuval, setTrackinputval] = useState("")
  const [smallnavshown, setSmallnavshown] = useState(true)

  const screensize = useContext(Screensize)
  const location = useLocation();
  const navigate = useNavigate()

  function showsearchinput(){
    if(location.pathname !=="/list"){
      setIsearchable(!isearchable)
    }
    
  }

  function handlechange(e){
    setTrackinputval(e.target.value)
  }



  function handleserach(){
    // console.log(location)
    if(trackinpuval && trackinpuval!==""){
      navigate("/list", {state:{
        category:trackinpuval,
        linktype:"foodword"
    }})
    setIsearchable(false)
    setTrackinputval("")
    }
   
  }


  
 

  return (

      screensize? (
      <div className="smallnav">
        <div className="logo">
        <Lottie className="logolottie" animationData={logojson} loop={true} autoplay={true}></Lottie>
        Kencipe
        </div>
        
        <div className="naver">
        <div className="search">
          {isearchable?<ImSearch onClick={handleserach}/>:<ImSearch onClick={showsearchinput}/>}
          {isearchable && <input placeholder='Search here' onChange={handlechange} />} 
        </div>
          {smallnavshown ? <FaBars onClick={()=>{setSmallnavshown(!smallnavshown)}}/> : 
            <div className='navopen'>
              <RiCloseLargeFill onClick={()=>{setSmallnavshown(!smallnavshown)}}/> 
              <div className="actuallinks">
                  <li onClick={()=>navigate("/")}>Home</li>
                  <li onClick={()=>navigate("/cook")}>Recipe</li>
                  <li>Community</li>
                  <li>About us</li>
                </div>
            </div>}
        </div>
      </div>
      ) : (
        <div className='navbar'>
      <div className="logo">
        <Lottie className="logolottie" animationData={logojson} loop={true} autoplay={true}></Lottie>
        Kencipe
        </div>
      <div className="links">
        <li onClick={()=>navigate("/")}>Home</li>
        <li onClick={()=>navigate("/cook")}>Recipe</li>
        <li>Community</li>
        <li>About us</li>
      </div>
      <div className="profile">
        <div className="search">
          {isearchable?<ImSearch onClick={handleserach}/>:<ImSearch onClick={showsearchinput}/>}
          {isearchable && <input placeholder='Search here' onChange={handlechange} />} 
        </div>
        <div className="profileicon"><GoPerson/></div>
      </div>
    </div>
      )
    
    
  )
}
