import React from 'react'
import style from '../Details.module.css'
import PropTypes from 'prop-types'

const RenderImg = (props) => {
  RenderImg.propTypes = {
    img: PropTypes.any
  }

  return (
    <div className={'basis-5/12 flex justify-center h-fit'}>
      <img className={`${style.limitH} object-contain h-full border-transparent border-solid border-2 hover:border-cyan-500`}
       src={props.img} alt='foto'></img>
    </div>
  )
}

export default RenderImg
