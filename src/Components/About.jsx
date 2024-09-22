import React from 'react'
import aboutbg from "./aboutbg.svg"
import "./styles/about.css"
import aboutmessage from "./aboutmessage.svg"

export default function About() {
  return (
    <div className='about'>
        <div className="aboutinner">
            <img src={aboutmessage} alt="" />
            <div>50+ Quick Food Recipes 
            That Easy To Do!</div>
        </div>
    </div>
  )
}
