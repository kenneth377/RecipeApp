import React, { useContext, useEffect, useState } from 'react';
import './styles/recipe.css';
import { Foordcont } from '../Foddcontext';
import { Navcontext } from '../Navigatecontext';
import { useNavigate } from 'react-router-dom';

export default function Recipe() {
  
    const fooder = useContext(Foordcont);
    console.log(fooder)
    const navigate = useNavigate()

    function handletocategory(catname){
        navigate("/list", {state:{
            category:catname,
            linktype:"food"
        }})
    }

    return (
        <div className='recipe'>
            <div className="recipeintro">
                <div className="discover">
                    <h1>Discover, Create, Share</h1>
                    <p>Dive into a world of flavors with our curated categories of foods</p>
                </div>
                <button>See All</button>
            </div>
            
                <div className="recipebox" >
                    {fooder.map((food)=>(
                        <div key={food.idCategory}>
                            <div className="recipeimagi">
                                <div className="imagine">
                                    <img src={food.strCategoryThumb} alt="foodimage" />
                                </div>
                            </div>
                            <div className="recipename">
                                <h1>{food.strCategory}</h1>
                                <a href="#" onClick={(e)=>{
                                    e.preventDefault()
                                    handletocategory(food.strCategory)
                                }}>Explore Category</a>
                            </div>
                        </div>
                    ))}
                    
                </div>
        </div>
    );
}
