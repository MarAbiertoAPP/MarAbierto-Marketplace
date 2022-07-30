import React from 'react'
import { useTranslation } from 'react-i18next'
const LanguajeButton = () => {
  const [t, i18n] = useTranslation('faq')
  console.log(t)
  return (
    <div className='flex flex-row'>
    <button onClick={() => i18n.changeLanguage('en')} className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2'}>en</button>
   <button onClick={() => i18n.changeLanguage('es')} className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'}>es</button>
  </div>
  )
}

export default LanguajeButton
