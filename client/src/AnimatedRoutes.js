import React, { useEffect } from 'react'
/* import Home from './Components/Home/Home' */
/* import Landing from './Components/LandingPage/Landing' */
import { useSelector } from 'react-redux'
import Faq from './Components/Faq/faq'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
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
import Team from './Components/Team/Team'
import Review from './Components/Review/Review'
// import Home from './Components/Home/Home'
import Banned from './Components/Banned/Banned'

export default function AnimatedRoutes () {
  const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector(state => state.User)
  useEffect(() => {
    if (user.id) {
      navigate('/Banned')
    }
  }, [user.id])
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
        <Route path='/team' element={<Team/>} />
        <Route path='/review' element={<Review/>} />
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path='/Banned' element={<Banned/>} />
      </Routes>
    </AnimatePresence>
  )
}
