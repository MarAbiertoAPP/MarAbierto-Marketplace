import React, { Fragment } from 'react'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Landing from './Components/LandingPage/Landing.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faq from '../src/Components/Faq/faq'

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
