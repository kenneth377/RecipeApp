import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "./styles/slider.css";
import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';
import comimg from "./community.svg";
import countryimages from './countryimages';
import { useNavigate } from 'react-router-dom';
import { Screensize } from '../screen';

export default function Slider({ arealist = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [issmallsize, setIssmallsize] = useState(false)
  const navigate = useNavigate();

  const issmallsize = useContext(Screensize)
  console.log("size is", issmallsize)
  return (
    <div className="slide">
      <h3>Global Flavors: A Culinary Journey</h3>
      <p>Embark on a delicious adventure exploring vibrant cuisines from around the world!</p>
      {
        issmallsize ? 
        <Swiper
        modules={[Pagination, EffectCards]}
        effect={'cards'}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true, dynamicBullets: true }}
        grabCursor={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {Array.isArray(arealist) && arealist.length > 0 ? (
          arealist.map((area, index) => {
            const image = countryimages[index];
            return (
              <SwiperSlide key={index}>
                <img src={image ? image.src : comimg} alt={image ? image.alt : 'Default Image'} />
                {activeIndex === index && (
                  <div className='slidecountryname'>
                   <p style={{ color: 'white' }}>{area.strArea}</p>
                    <a href="" onClick={(e) => {
                      e.preventDefault();
                      navigate("/list", { state: { category: area.strArea, linktype: "country" } });
                    }}>Explore Cuisine</a>
                  </div>
                )}
              </SwiperSlide>
            );
          })
        ) : (
          <div>No areas available</div>
        )}
      </Swiper>
        :
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect={'coverflow'}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        grabCursor={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {Array.isArray(arealist) && arealist.length > 0 ? (
          arealist.map((area, index) => {
            const image = countryimages[index];
            return (
              <SwiperSlide key={index}>
                <img src={image ? image.src : comimg} alt={image ? image.alt : 'Default Image'} />
                {activeIndex === index && (
                  <div className='slidecountryname'>
                    <p>{area.strArea}</p>
                    <a href="" onClick={(e) => {
                      e.preventDefault();
                      navigate("/list", { state: { category: area.strArea, linktype: "country" } });
                    }}>Explore Cuisine</a>
                  </div>
                )}
              </SwiperSlide>
            );
          })
        ) : (
          <div>No areas available</div>
        )}
      </Swiper>
      }
    </div>
  );
}
