import React, { useState } from 'react'
import style from './faq.module.css'
import box from '../../assests/illustration-box-desktop.svg'
import arrow from '../../assests/icon-arrow-down.svg'
import { Data } from './Data'
import { motion } from 'framer-motion'
import Nav from '../UI/Nav/Navigation'

export default function Faq () {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (

    <motion.div
    className={style.main}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

    <main className={style.wrapper}>
    <Nav/>

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
