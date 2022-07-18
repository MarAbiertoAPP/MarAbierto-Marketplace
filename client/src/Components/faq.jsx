import React from 'react'
import style from './faq.module.css'
import box from '../assests/illustration-box-desktop.svg'

export default function Faq () {
  return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.mainImage}>
                        <div></div>
                    <image className={style.box} src={box}/>
                </div>
                <div className={style.accordion}>
                    <h1 className={style.accordionTitle}>FAQ</h1>
                        <div className={style.accordionQuestion}>
                            <div className={style.accordionAnswer}>
                                <div className={style.question}>
                                    <h3 className={style.questionTitle}>What is MAR ABIERTO NFT?</h3>
                                    <img src="../assests/icon-arrow-down.svg"/>
                                </div>
                                <div className={style.answer}>
                                    its a new NFT MARKETPLACE
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
  )
}
