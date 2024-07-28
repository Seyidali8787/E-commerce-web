import React from 'react';
import Banner from './Banner'; // Sax dhoofinta
import HomeCategory from './HomeCategory';
import Register from './Register';
import Location from './Location';
import AboutUs from './AboutUs';
import CategoryShowCase from './categoryShowCase'
import AppSection from './AppSection';
import Sponsor from './Sponsor';
const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory/>
      < CategoryShowCase/>
      <Register/>
      <Location/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>


    </div>
  );
};

export default Home;