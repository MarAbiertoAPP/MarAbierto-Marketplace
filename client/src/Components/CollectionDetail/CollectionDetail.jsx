import React from 'react'
import { useParams } from 'react-router-dom'
const CollectionDetail = () => {
  const { name } = useParams()

  return (
    <div ><h1 className='text-white font-bold '>
        estamos en la collection detail de {name}</h1></div>
  )
}

export default CollectionDetail
