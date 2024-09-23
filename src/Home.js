
import { useEffect, useState } from 'react';
import './Home.css';
import About from './Components/About';
import Community from './Components/Community';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Land from './Components/Land';
import Recipe from './Components/Recipe';
import { Foordcont } from './Foddcontext';
import { Navcontext } from './Navigatecontext';
import { useNavigate } from 'react-router-dom';
import Slider from './Components/Slider';


function Home() {
  const [retdata, setRetdata] = useState(null)
  const [arealist, setArealist] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    
      .then(
          (response)=>{
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
              return response.json()
          }
      )
      .then((data)=>{
        console.log(data.categories)
          setRetdata(data.categories)
      })
      .catch((err)=>{
          console.log(err)
          return err
      })
  },[])


  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  
    .then(
        (response)=>{
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
            return response.json()
        }
    )
    .then((data)=>{
        setArealist(data.meals)
    })
    .catch((err)=>{
        console.log(err)
        return err
    })
},[])


  return (
    
    <div className="Home">
      {retdata?    
        <Navcontext.Provider value={navigate}>
          <Foordcont.Provider value={retdata}>
        
          <Land />
          <Slider arealist={arealist}/>
          <Recipe />
          <About />
          <Community />
          <CTA />
          <Footer />
          
          </Foordcont.Provider>
        </Navcontext.Provider>:
     <div>Loading</div>
}
    </div>
   
    
  );
}

export default Home;
