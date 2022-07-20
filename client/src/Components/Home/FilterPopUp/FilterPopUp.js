import React from 'react'
import Classes from '../FilterPopUp/filterpopup.module.css'

export default function FilterPopUp () {
  // filter: {
  //   price: null,
  //   title: null,
  //   categoryId: null,
  //   isActive: null,
  //   userId: null
  // }

  return (
    <div className={Classes.container}>
      <h1>ITS TIME TO FILTER!</h1>
      <br/>
      <label>Price range?
        <input className={Classes.input} type={'number'} width={'5'} placeholder={'Min'}/>
        -
        <input className={Classes.input} type={'number'} width={'5'} placeholder={'Max'}/>
      </label>
      <br/>
      <label>Active?:
        <input type={'checkbox'}/>
      </label>
      <br/>
      <button className={Classes.button} type={'submit'}> Lets Go!</button>
    </div>
  )
}
