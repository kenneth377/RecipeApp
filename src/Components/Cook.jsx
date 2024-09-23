import React, { useState,useEffect } from 'react'
import "./styles/cook.css"
import Navbar from "./Navbar"
import { TfiYoutube } from 'react-icons/tfi'
import { CiGlobe } from 'react-icons/ci'
import { Navcontext } from '../Navigatecontext'
import { useNavigate, useLocation} from 'react-router-dom'

export default function Cook() {
    const [cookfood,setCookfood] = useState({})
    const [ingredlist, setIngredlist] = useState([])
    const [measurelist, setMeasurelist] = useState([])
    const [instructionlist, setInstructionlist] = useState([])
    const [hassource, setHassource] = useState(false)

    const navigate = useNavigate()

    const location = useLocation();
    const { idMeal } = location.state || {};

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      
        .then(
            (response)=>{
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }

                return response.json()
            }
        )
        .then((data)=>{
            setCookfood(data.meals[0])  
        })
        .catch((err)=>{
            console.log(err)
            return err
        })
    },[])


    useEffect(()=>{
        const filteredArray = Object.entries(cookfood)
    .filter(([key,val]) => key.includes('Ingredient') &&val&& val!="" )
    setIngredlist(filteredArray)

    const filtermeasurearr = Object.entries(cookfood)
    .filter(([key,val]) => key.includes('Measure') &&val&& val!="" )
    setMeasurelist(filtermeasurearr)

    setInstructionlist(cookfood.strInstructions ? cookfood.strInstructions.split("\n") : []);

    if(cookfood.strSource){
        setHassource(true)
    }
    },[cookfood])


  return (
    <Navcontext.Provider value={navigate}>
    <div className='cook'>
        {/* <Navbar /> */}
        
        <div className="cookbox">
            <div className="imagrep"><img src={cookfood.strMealThumb} al1t="Food image" /></div>
            <div className="ingredients">
                {
                    ingredlist.map((ingredient,index)=>(
                  <div key={index}>
                   <input type="checkbox" id={ingredient[0]} name="options"/>
                   <label for={ingredient[0]}>  &nbsp;{ingredient[1]} &nbsp;&nbsp;&nbsp;&nbsp; <span>{measurelist[index][1]}</span></label>
                 </div>
                    ))
                }
               
            </div>
            <div className="cookname">{cookfood.strMeal}</div>
            <div className="cookbtns">
                <a href={cookfood.strYoutube} target='blank'><TfiYoutube/></a>
                {hassource && <a href={cookfood.strSource}><CiGlobe/></a>}
                </div>
            <div className="cookinstructions">
                <h2>Instructions</h2>
                {
                    instructionlist.map((instruction,index)=>(
                        <p key={index}>{index+1}. &nbsp;{instruction}</p>
                    ))
                }
            </div>
        </div>
    </div>
    </Navcontext.Provider>
  )
}
