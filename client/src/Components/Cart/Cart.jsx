import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartToBuy = useSelector(state => state.Cart)

  return (

    <div style={ { color: 'white' } }>

{cartToBuy.map(el =>
<div key={el.id}>
<h1>title: {el.title}</h1>
<img src={el.image} alt="cardToBuy" />
<h2>Price: {el.price}</h2>
</div>
)}

    </div>
  )
}

export default Cart
