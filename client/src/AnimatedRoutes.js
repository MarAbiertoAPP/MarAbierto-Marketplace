import React from 'react'

/* import Home from './Components/Home/Home' */
/* import Landing from './Components/LandingPage/Landing' */
import Faq from './Components/Faq/faq'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Cart } from './Components/Cart/Cart'
import RenderDetails from './Components/DetailsNFT/RenderDetails'
import Checkout from './Components/CheckOut/Checkout.jsx'
import { AnimatePresence } from 'framer-motion'
import UserDetail from './Components/UserDetail/UserDetail'
import ThanksForBuying from './Components/thanksForBuying/ThanksForBuying'
import WalletCardEthers from './Components/metamask/Metamask'
import NewHome from './Components/NewHome/NewHome'
import ExploreCollection from './Components/ExploreCollections/Explore_collection'
import CollectionNewHome from './Components/CollectionNewHome/CollectionNewHome'
import Create from './Components/Create/Create'
import AdminPanel from './Components/AdminPanel/AdminPanel'
import Home from './Components/Home/Home'
export default function AnimatedRoutes () {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>

        <Route path='/wallet' element={<WalletCardEthers/>}/>
        <Route path="/" element={<NewHome/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/detail/:id" element={<RenderDetails/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path='/user' element={<UserDetail/>}/>
        <Route path='/thanks' element={<ThanksForBuying/>}/>
        <Route path = '/collection' element={<ExploreCollection/>}/>
        <Route path='/create' element={<Create/>} />
        <Route path='/collection/:name' element={<CollectionNewHome/>} />
        <Route path='/AdminPanel' element={<AdminPanel/>} />
        <Route path='/home' element={<Home/>} />

      </Routes>
    </AnimatePresence>
  )
}
