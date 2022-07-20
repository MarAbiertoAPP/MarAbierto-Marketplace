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
      <h1>Its time to filter!</h1>
      <br/>
      <label>Price range?
        <input type={'number'} width={'5'}/>
        -
        <input type={'number'} width={'5'}/>
      </label>
      <br/>
      <label>Active?:
        <input type={'checkbox'}/>
      </label>
      <br/>
      <button type={'submit'}> Lets Go!</button>
    </div>
  )
}
