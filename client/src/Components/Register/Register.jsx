/* eslint-disable */

import React, { useState } from 'react'
// import './Register.css'
import logoPMA from '../../assests/LogoPMA.png'
import style from './Register.module.css'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";

function Register () {
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  function validate (value) {
    const errors = {}

    if (!value.name) {
      errors.name = 'Name is required'
    } else if (!/^[a-zA-Z]{3,10}$/.test(value.name)) {
      errors.name = 'Name is invalid'
    }

    if (!value.lastname) {
      errors.lastname = 'Lastname is required'
    } else if (!/^[a-zA-Z]{3,10}$/.test(value.lastname)) {
      errors.lastname = 'Lastname is invalid'
    }

    if (!value.email) {
      errors.email = 'Email is required'
    } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value.email)) {
      errors.email = 'Email is invalid'
    }

    if (!input.password) {
      errors.password = 'Password is required'
    } else if (!/^(?=.*[0-9])[a-zA-Z0-9]{8,16}$/.test(input.password)) {
      errors.password = 'Password must 8 characters at and least one number'
    }
    return errors
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={style.div}>

      <div className={`${style.limitH} flex w-screen max-w-screen-xl justify-center`}>

        <div className='flex flex-col justify-center items-center basis-5/12 my-12'>

          <div className='items-center m-8 text-center'>
            <h1 className='py-12 font-mono text-6xl self-auto text-amber-600'>Welcome!</h1>
            <h2 className='font-mono text-2xl text-neutral-300'>Un pequeño paso que puede hacer la diferencia!</h2>
            <h2 className='font-mono text-2xl text-neutral-300'>Ven y sumerjete en los gradiosos NFTs de Mar Abierto!</h2>
          </div>
        </div>

        <div className={`flex flex-col items-center basis-6/12 my-12 ${style.card}`}>
          
          <div className=" -m-4 flex flex-start max-h-24 max-w-fit">
            <img className="object-cover" src={logoPMA} alt='logo'></img>
          </div>

          <h1 className='py-12 font-mono text-4xl self-auto text-amber-600'>Sign Up!</h1>

          <form className={style.card} onSubmit={handleOnSubmit}>

            <div className='flex p-4 text-4xl object-contain w-fit my-4 bg-transparent '>
              <FaUserAlt className='text-cyan-500 text-4xl mx-2'/>

              <input
                className='bg-transparent text-neutral-300 outline-none border-solid border-2 border-transparent hover:border-b-amber-600'
                name='name'
                id='name'
                type='text'
                value={input.name}
                onChange={handleChange}
                placeholder='Insert Name'
                autoComplete='off'
                />
              {/* {errors.name && <p>{errors.name}</p>} */}
            </div>

            <div className='flex bg-white p-4 text-4xl object-contain w-fit my-4 bg-transparent'>
              <FaUserAlt className='text-cyan-500 text-4xl mx-2'/>
              <input
                className='bg-transparent text-neutral-300 outline-none border-solid border-2 border-transparent hover:border-b-amber-600'
                name='lastname'
                id='lastname'
                type='text'
                value={input.lastname}
                onChange={handleChange}
                placeholder='Insert Lastname'
                autoComplete='off'
                />
              {/* {errors.lastname && <p >{errors.lastname}</p>} */}
            </div>

            <div className='flex bg-white p-4 text-4xl object-contain w-fit my-4 bg-transparent   '>
              <GrMail className='text-cyan-500 text-4xl mx-2'/>
              <input
                className='bg-transparent text-neutral-300 outline-none border-solid border-2 border-transparent hover:border-b-amber-600'
                name='email'
                id='email'
                type='text'
                value={input.email}
                onChange={handleChange}
                placeholder='Insert Email'
                autoComplete='off'
                />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>

            <div className='flex bg-white p-4 text-4xl object-contain w-fit my-4 bg-transparent  '>
              <FaLock className='text-cyan-500 text-4xl mx-2' />
              
              <input
                className='bg-transparent text-neutral-300 outline-none border-solid border-2 border-transparent hover:border-b-amber-600'
                name='password'
                id='password'
                type='password'
                value={input.password}
                onChange={handleChange}
                placeholder='Insert Password'
                autoComplete='off'    
                />
              {/* {errors.password && (<p >{errors.password}</p>)} */}
            </div>

           <button className='' type='submit'>
             Register
           </button>
          </form>
        </div>

      </div>
    </div>

  )
}

export default Register
