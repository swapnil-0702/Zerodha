import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FeatureSection from './FeatureSection';

function HomePage() {
    return ( 
        <>
          <Hero />
          <Awards/>
          <Stats/>
          <FeatureSection/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
        </>
     );
}

export default HomePage;