
import React, { useState } from 'react'
import './Register.css'

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
    <div className='div-register'>
      <form onSubmit={handleOnSubmit} className='register-form'>
        <h1>Register</h1>
        <div>
          <h4 htmlFor='name'>Name</h4>
          <input
            name='name'
            id='name'
            type='text'
            value={input.name}
            onChange={handleChange}
            placeholder='Insert Name'
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <h4 htmlFor='lastname'>Lastname</h4>
          <input
            name='lastname'
            id='lastname'
            type='text'
            value={input.lastname}
            onChange={handleChange}
            placeholder='Insert Lastname'
          />
          {errors.lastname && <p >{errors.lastname}</p>}
        </div>
        <div>
          <h4 htmlFor='email'>Email</h4>
          <input
            name='email'
            id='email'
            type='text'
            value={input.email}
            onChange={handleChange}
            placeholder='Insert Email'
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <h4 htmlFor='password'>Password</h4>
          <input
            name='password'
            id='password'
            type='password'
            value={input.password}
            onChange={handleChange}
            placeholder='Insert Password'
          />
          {errors.password && (<p >{errors.password}</p>)}
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    </div>

  )
}

export default Register
