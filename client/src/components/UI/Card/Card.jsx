import React from "react";
import Classes from './card.module.css';
export default function Card ( {title, image, price}) {
  
    return(
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
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Buy Now</a>
            </div>
        </div>
        </div>
    )
}