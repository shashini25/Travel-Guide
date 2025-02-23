import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import heroImg from '../Assets/1.jpg';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}  // Pass the imported image directly
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </>
  );
}
