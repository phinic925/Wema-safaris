import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
function App() {


  return (
    <>
    <Navbar/>
  <Home/>
  <Discover/>
  <Features/>
  <Testimonials/>
  <Gallery/>
    </>
  )
}

export default App
