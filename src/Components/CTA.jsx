import React from 'react'
import "./styles/cta.css"
import iphone from "./iphone.svg"

export default function CTA() {
  return (
    <div className='cta'>
       <h1>Embrace the joy of cooking with get it on your iPhone or Android Your kitchen adventure begins now!</h1>
       <div className="ctabtns">
        <div className="btnapple">apple</div>
        <div className="btngoogle">google</div>
       </div>
       <img src={iphone} alt="phones" />
    </div>
  )
}
