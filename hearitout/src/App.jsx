import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section3 from './Components/Section3'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer'
import Section2 from './Components/Section2'


function App() {

  return (
    <>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
    </>
  )
}

export default App
