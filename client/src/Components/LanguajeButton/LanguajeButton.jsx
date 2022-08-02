import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
const LanguajeButton = () => {
  const [/* t */, i18n] = useTranslation('faq')
  const [lan, setlan] = useState(true)

  const handleLan = () => {
    setlan(!lan)
  }
  return (
    <div className='flex flex-row'>
      {lan
        ? <button onClick={() => {
          i18n.changeLanguage('es')
          return handleLan()
        }} className={'   h-10 w-10 radius- 20  bg-transparent  text-blue-700 font-semibold    hover:border-transparent rounded mr-0'}><img src='https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/spain-flag-icon.png' ></img ></button>
        : <button onClick={() => {
          i18n.changeLanguage('en')
          return handleLan()
        }} className={'bg-transparent h-10 w-10 radius- 20  text-blue-700 font-semibold    hover:border-transparent rounded'}> <img src='https://media.istockphoto.com/vectors/flagunited-kingdom-flag-vector-id1211686337?k=20&m=1211686337&s=170667a&w=0&h=PTPIoHo3xo_BZuQ8rnC3WLtpbL1nGSB8n_BZHcXnjl0='></img></button> }

  </div>
  )
}

export default LanguajeButton
