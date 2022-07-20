import React, { Fragment } from 'react'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Landing from './Components/LandingPage/Landing.jsx'
import Faq from './Components/Faq/faq.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
