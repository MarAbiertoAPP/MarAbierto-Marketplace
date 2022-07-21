import React from 'react'
import Classes from './card.module.css'
import PropTypes from 'prop-types'
/* import ethereum from '../../../assests/icon-ethereum.svg' */
import { useAuth0 } from '@auth0/auth0-react'
export default function Card ({ title, image, price }) {
  Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.any
  }
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  return (
    <div className={Classes.container}>
        <div className={Classes.card}>
            <div className={Classes.imgBx}>
                <img src={image} alt="pic"></img>
            </div>
            <div className={Classes.contentBx}>
                <h2>{title}</h2>
                <div className={Classes.color}>
                    <h3>Price :</h3>
                    <span>{price} ETH</span>
                </div>
                <a href="" onClick={() => isAuthenticated ? alert('vos podes comprar flaco') : loginWithRedirect()}>Buy Now</a>
            </div>
        </div>
        </div>
  )
}
