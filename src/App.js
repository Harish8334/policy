import logo from './logo.svg';
import './App.css';
import HeroSection from './hero/hero';
import Header from './header.js/header';
import { Offcanvas } from 'react-bootstrap';
import Doubts from './doubts/doubts';

function App() {
  return (
    <>
   
    <Header/>
    <HeroSection/>
    <Doubts/>
    </>
  );
}

export default App;
