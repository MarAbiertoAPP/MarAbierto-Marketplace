import React from 'react'
import Classes from './card.module.css'
import PropTypes from 'prop-types'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../Redux/Actions/ActionsCart'
import { Link } from 'react-router-dom'

export default function Card ({ title, image, price, id }) {
  const dispatch = useDispatch()
  Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string
  }
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const handleBuy = () => {
    return dispatch(

      addToCart({
        title,
        image,
        price,
        id
      }
      )
    )
  }

  return (
    <div className={Classes.container}>
        <div className={Classes.card}>
            <div className={Classes.imgBx}>
              <Link to={`/detail/${id}`}>
                <img src={image} alt="pic"></img>
              </Link>
            </div>
            <div className={Classes.contentBx}>
                <h2>{title}</h2>
                <div className={Classes.color}>
                    <h3>Price :</h3>
                    <span>{price} ETH</span>
                </div>
               <button onClick={(e) => isAuthenticated ? handleBuy(e) : loginWithRedirect()} >Buy Now</button>
            </div>
        </div>
        </div>
  )
}
