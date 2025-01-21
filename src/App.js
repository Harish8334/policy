
import './App.css';
import HeroSection from './hero/hero';
import Header from './header.js/header';

import Doubts from './doubts/doubts';
import  Carousel from './carousel/carousel';
import Partner from './partner-div/partner';
import Footer from './Footer/footer';




function App() {
  return (
    <>
   
    <Header/>
    <HeroSection/>
    <Doubts/>
    <Carousel/>
  <Partner/>
<Footer/>
    </>
  );
}

export default App;
