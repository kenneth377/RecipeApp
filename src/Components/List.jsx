import React, { useState ,useEffect} from 'react'
import Navbar from "./Navbar"
import "./styles/list.css"
import aboutbg from "./community.svg"

export default function List() {
    const [catlist,setCatlist] = useState([])

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
      
        .then(
            (response)=>{
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }

                return response.json()
            }
        )
        .then((data)=>{
            setCatlist(data.meals)
        })
        .catch((err)=>{
            console.log(err)
            return err
        })
    },[])

    useEffect(()=>{
        console.log(catlist)
    },[catlist])
  
  return (
    <div className='list'>
        <Navbar/>
        {catlist.length>0?
        <div className="listbox">
            {catlist.map((food) => (
                    <div className='foodlistitem' key={food.idMeal}>
                        <img src={food.strMealThumb} alt="fooditem" />
                        <div className="fooditemname">
                            <p>{food.strMeal}</p>
                            <a href="">View Recipe</a>    
                        </div>
                    </div>
                ))
            }
        </div>:
        <div>Page not Found</div>
}
    </div>
  )
}