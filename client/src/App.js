import React, { Fragment } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Landing from './Components/LandingPage/Landing'
import Faq from './Components/Faq/faq'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './Components/Cart/Cart'
import { Auth0Provider } from '@auth0/auth0-react'
import RenderDetails from './Components/DetailsNFT/RenderDetails'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0

export default function App () {
  return (
    <Fragment>
      <BrowserRouter>
      <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}`}
    >
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detail/:id' element={<RenderDetails/>} />
        </Routes>
        </Auth0Provider>
      </BrowserRouter>

    </Fragment>
  )
}
