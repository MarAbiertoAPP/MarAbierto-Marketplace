import React, { Fragment } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Landing from './Components/LandingPage/Landing'
import Faq from './Components/Faq/faq'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './Components/DetailsNFT/Details'

export default function App () {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path='/detail/:id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
