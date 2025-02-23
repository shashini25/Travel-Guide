import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import ServiceImg from '../Assets/9.jpg';

export default function Service() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={ServiceImg}  // Pass the imported image directly
        title="Services"
        
      />
    <div></div>
    </>
  )
}
