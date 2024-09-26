import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./styles/list.css";
import Lottie from 'lottie-react';
import logojson from "./logo.json"

export default function List() {
    const [catlist, setCatlist] = useState([]);
    const [isloading, setIsloading] = useState(true)
    const [linktype, setLinktype] = useState("www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    const navigate = useNavigate();
    const location = useLocation();

    const category = location.state?.category;
    const link = location.state?.linktype;

    useEffect(() => {
        if (link==="food") {
            setLinktype(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        } 

        else if(link==="country"){
            setLinktype(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`)
        }
        else if(link==="foodword"){
            setLinktype(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
        }
        else {
            console.error("Link not provided, default link will be used.");
        }
    }, [link,category]);

    useEffect(() => {
        if (!category) return; 
        console.log(linktype)
        setIsloading(true)

        fetch(linktype)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setCatlist(data.meals || []);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>{
                setIsloading(false)
            })
    }, [category,linktype]); 

    const handletocook = (id) => {
        navigate("/cook", { state: { idMeal: id } });
    };

    return (
        <div className='list'>
               <div className="logo">
        <Lottie className="logolottie" animationData={logojson} loop={true} autoplay={true}></Lottie>
        Kencipe</div>
            {isloading ? (
                <div className="loading">Loading, wait a lil...</div>
            ) : (
                catlist.length > 0 ? (
                    <div className="listbox">
                        <h1>{category}</h1>
                        {catlist.map((food) => (
                            <div className='foodlistitem' key={food.idMeal}>
                                <img src={food.strMealThumb} alt="fooditem" />
                                <div className="fooditemname">
                                    <p>{food.strMeal}</p>
                                    <a href='#' onClick={(e) => {
                                        e.preventDefault();
                                        handletocook(food.idMeal);
                                    }}>View Recipe</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Page not Found</div>
                )
            )}
        </div>
    );
    
}
