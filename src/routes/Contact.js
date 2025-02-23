import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import ContactImg from '../Assets/10.jpg';

export default function Contact() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={ContactImg}  // Pass the imported image directly
        title="Contact Us"
        
      />
    <div></div>
    </>
  )
}
