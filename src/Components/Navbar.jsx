import React, { useState } from 'react'
import "./styles/navbar.css"
import {  ImSearch } from 'react-icons/im';
import { GoPerson } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [isearchable, setIsearchable] = useState(false)
  const [trackinpuval, setTrackinputval] = useState("")

  const navigate = useNavigate()

  function showsearchinput(){
    setIsearchable(!isearchable)
  }

  function handlechange(e){
    setTrackinputval(e.target.value)
  }

  function handleserach(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${trackinpuval}`)
    
    .then(
        (response)=>{
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
            return response.json()
        }
    )
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
        return err
    })
    .finally(()=>{
      setTrackinputval("")
      setIsearchable(!isearchable)
    })
  }


  
 

  return (
    <div className='navbar'>
      <div className="logo">Recipedia</div>
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
}
