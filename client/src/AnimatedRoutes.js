import React from 'react'
import Home from './Components/Home/Home'
import Landing from './Components/LandingPage/Landing'
import Faq from './Components/Faq/faq'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Cart } from './Components/Cart/Cart'
import RenderDetails from './Components/DetailsNFT/RenderDetails'
import Checkout from './Components/CheckOut/Checkout.jsx'
import { AnimatePresence } from 'framer-motion'
import UserDetail from './Components/UserDetail/UserDetail'
import ThanksForBuying from './Components/thanksForBuying/ThanksForBuying'
import WalletCardEthers from './Components/metamask/Metamask'
import ExploreCollection from './Components/Explore_collection'

export default function AnimatedRoutes () {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing/>}/>
        <Route path='/wallet' element={<WalletCardEthers/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/detail/:id" element={<RenderDetails/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path='/user' element={<UserDetail/>}/>
        <Route path='thanks' element={<ThanksForBuying/>}/>
        <Route path = '/collection' element={<ExploreCollection/>}/>
      </Routes>
    </AnimatePresence>
  )
}
