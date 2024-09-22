import React from 'react';
import "./styles/land.css"
import landingimage from "./landing.svg"

export default function Landmore() {
  return (
    <div className='landmore'>
        <div>
            <h1>Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
            <p>Discover more than <span>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook.</p>
            <a>Explore Recipes</a>
        </div>
        <div><img src={landingimage} alt="Nice Food image" /></div>
     
    </div>
  )
}
