import React from 'react'
import PropTypes from 'prop-types'
import { FaEthereum } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
const CurrentPriceDetail = (props) => {
  CurrentPriceDetail.propTypes = {
    price: PropTypes.any
  }
  const [t] = useTranslation('faq')

  return (
    <div>
      <p className='text-md self-auto text-neutral-400 tracking-wider'>{t('currentPrice.currentPrice')}:</p>

      <div className='flex my-2'>
        <FaEthereum className='text-white text-xl'/>
        <p className=' ml-2 text-xl self-auto text-white tracking-wider'>{`${props.price} ETH`}</p>
      </div>

    </div>
  )
}

export default CurrentPriceDetail
