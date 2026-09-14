import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import Features from './components/Features'
function App() {


  return (
    <>
    <Navbar/>
  <Home/>
  <Discover/>
  <Features/>
    </>
  )
}

export default App
