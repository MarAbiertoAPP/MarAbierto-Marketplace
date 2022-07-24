import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../UI/Nav/Navigation'
import Details from './Details'

const RenderDetails = (props) => {
  return (
    <div >
      <Nav/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default RenderDetails
