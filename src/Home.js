
import { useEffect, useState } from 'react';
import './Home.css';
import About from './Components/About';
import Community from './Components/Community';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Land from './Components/Land';
import Recipe from './Components/Recipe';
import { Foordcont } from './Foddcontext';


function Home() {
  const [retdata, setRetdata] = useState(null)

  useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    
      .then(
          (response)=>{
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
              console.log(response)
              return response.json()
          }
      )
      .then((data)=>{
          setRetdata(data)
      })
      .catch((err)=>{
          console.log(err)
          return err
      })
  },[])

  useEffect(()=>{
    if(retdata){
      console.log(retdata.meals)
    }
  },[retdata])


  return (
    <div className="Home">
      {retdata?    
      <Foordcont.Provider value={retdata.meals}>
   
      <Land />
      <Recipe />
      <About />
      <Community />
      <CTA />
      <Footer />
      
    </Foordcont.Provider>:
     <div>hello</div>
}
    </div>
    
  );
}

export default Home;
