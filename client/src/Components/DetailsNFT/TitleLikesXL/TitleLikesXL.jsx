import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import axios from 'axios'

const TitleLikesXL = (props) => {
  TitleLikesXL.propTypes = {
    title: PropTypes.any
  }
  const userId = useSelector(state => state.User.id)
  const { detail } = useSelector(state => state)
  const [estilo, setEstilo] = useState('text-neutral-400 text-3xl hover:text-red-500')

  // useEffect(() => {
  //   if (detail.likes.includes(userId)) {
  //     setEstilo('text-red-500 text-3xl hover:text-red-500')
  //   } else {
  //     setEstilo('text-neutral-400 text-3xl hover:text-red-500')
  //   }
  // },[])

  const handleClick = () => {
    axios.post('/favorite/add', { nftId: detail.nftId, userId })
    return setEstilo('text-red-500 text-3xl')
    // axios.post('/favorite/delete', { nftId: id, userId })
  }

  return (
    <div className='hidden xl:flex w-full'>
      <h1 className='mt-6 text-3xl tracking-wider text-purple-700 mx-8 capitalize'>{props.title}</h1>
      <div className='flex items-center mt-6 place-content-end ml-64'>
        <FaHeart onClick={handleClick} className={estilo}/>
        {/* <p className='ml-4 text-md self-auto text-neutral-400 tracking-wider'>444 likes</p> */}
      </div>
    </div>
  )
}

export default TitleLikesXL
