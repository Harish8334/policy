
import './App.css';
import HeroSection from './hero/hero';
import Header from './header.js/header';

import Doubts from './doubts/doubts';
import  Carousel from './carousel/carousel';
import Partner from './partner-div/partner';
import Footer from './Footer/footer';
import Pratice from './prartice/pratice';
import React from 'react';



function App() {
  return (
    <>
   
    <Header/>
    <HeroSection/>
    <Doubts/>
    <Carousel/>
  <Partner/>
<Footer/>
{/* <Pratice  name="Harish" age="20" isStudent={true}/>
<Pratice  name="Harish" age="20" isStudent={false}/>
<Pratice/> */}

    </>
  );
}

export default App;
