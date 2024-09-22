import React, { useContext, useEffect, useState } from 'react';
import './styles/recipe.css';
import { Foordcont } from '../Foddcontext';

export default function Recipe() {
  
    const fooder = useContext(Foordcont);

    return (
        <div className='recipe'>
            <div className="recipeintro">
                <div className="discover">
                    <h1>Discover, Create, Share</h1>
                    <p>Check our most popular recipes of this week</p>
                </div>
                <button>See All</button>
            </div>
            
                <div className="recipebox" >
                    {fooder.map((food)=>(
                        <div key={food.idMeal}>
                            <div className="recipeimagi">
                                <div className="imagine">
                                    <img src={food.strMealThumb} alt="foodimage" />
                                </div>
                            </div>
                            <div className="recipename">
                                <h1>{food.strMeal}</h1>
                                <a href="#">View Recipe</a>
                            </div>
                        </div>
                    ))}
                    
                </div>
        </div>
    );
}
