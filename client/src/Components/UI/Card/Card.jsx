import React from 'react'
import Classes from './card.module.css'
import PropTypes from 'prop-types'
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
                <img src={image} alt="pic"></img>
            </div>
            <div className={Classes.contentBx}>
                <h2>{title}</h2>
                <div className={Classes.color}>
                    <h3>Price :</h3>
                    <span>{price} ETH</span>
                </div>
                <Link to='/cart'>
               <button onClick={(e) => handleBuy(e)} >Buy Now</button>
               </Link>
            </div>
        </div>
        </div>
  )
}
