import React, { useState } from 'react'
import style from './faq.module.css'
import box from '../../assests/illustration-box-desktop.svg'
import arrow from '../../assests/icon-arrow-down.svg'
import { Data } from './Data'
import { motion } from 'framer-motion'
import Nav from '../UI/Nav/Navigation'

import { useTranslation } from 'react-i18next'

export default function Faq () {
  const [t, i18n] = useTranslation('faq')
  console.log(t('Title.title'))
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  console.log(t('Title.title'))
  console.log(t('Title.answer'))

  return (

    <motion.div
    className={style.main}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

    <main className={style.wrapper}>
    <Nav/>
    <div>
    <button onClick={() => i18n.changeLanguage('en')} className={'bg-lime-300'}>en</button>
    <button onClick={() => i18n.changeLanguage('es')} className={'bg-lime-300'}>es</button>
    </div>

        <div className={style.image__wrapper}>
            <div className={style.image__wrapper_inner}>

            </div>
            <img className={style.box} src={box} alt="box"/>
        </div>
    <div className={style.accordion__wrapper}>
        <h1 className={style.title__accordion}><b>FAQ</b></h1>
        <div className={style.questions__accordions}>
                {Data?.map((el, i) => (
                    <div className={style.question_answer__accordion} key={el.id}>
                    <div className={selected === i ? style.active : style.question}>
                        <h3 className={style.title__question} onClick={() => toggle(i)}>
                            {el.title}
                        </h3>
                        <img src={arrow}/>
                    </div>
                    <div className={selected === i ? style.active : style.answer}>
                        {el.answer}
                    </div>
                </div>

                ))}

        </div>

    </div>
    </main>
</motion.div>
  )
}
