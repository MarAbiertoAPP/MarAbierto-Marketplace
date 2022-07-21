import React from 'react'
import Classes from './card.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card ({ title, image, price, id }) {
  Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string
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
                <a href="#">Buy Now</a>
            </div>
        </div>
        </div>
  )
}
