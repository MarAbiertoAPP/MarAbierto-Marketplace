import './App.css'
import React, { Fragment } from 'react'
import Faq from './Components/Faq/faq'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
