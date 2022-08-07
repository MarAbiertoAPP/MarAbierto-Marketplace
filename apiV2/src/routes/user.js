require('dotenv').config()
const express = require('express')
const router = express.Router()
const { createUser, searchUser, searchByName, createBannedUser, getAllBannedUsers } = require('../utils/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { user } = require('../db.js')

// Create New User Register
router.post('/signup', async (req, res) => {
  const { name, nickname, email, picture } = req.body
  console.log(name, nickname, email, picture)
  try {
    const userS = await searchUser(email)
    if (userS) {
      return res.status(200).json(userS)
    }

    const newuser = await createUser(name,
      nickname, picture, email, 'N')

    // emailRegisterUser(email, `${name} ${lastname}`)
    res.json({
      user: newuser
    })
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido' })
  }
})

// Get user
router.get('/profile', async (req, res) => {
  res.send('not working at the moment')
})

// Iniciar sesión
router.post('/signin', async (req, res) => {
  const { email, pass } = req.body
  try {
    const user = await searchUser(email)
    if (!user) {
      return res.status(401).json({ msg: 'Usuario no registrado' })
    }
    const passwordCorrect = await bcrypt.compare(pass, user.dataValues.password)
    if (!passwordCorrect) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' })
    }
    const userForToken = {
      username: user.name,
      id: user.id
    }
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 * 24 })
    res.send({
      username: user.username,
      name: user.name,
      token
    })
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido' })
  }
})

router.get('/amount', async (req, res) => {
  try {
    const response = await user.findAll()
    return res.status(201).json(response.length)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido' })
  }
})

router.get('/getallusersdata', async (req, res) => {
  try {
    const response = await user.findAll()
    return res.status(201).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido' })
  }
})

router.get('/getuserdatabyname/:nickname', async (req, res) => {
  try {
    const { nickname } = req.params
    const response = await searchByName(nickname)
    return res.status(201).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido' })
  }
})

router.post('/banuser', async(req,res) => {
  try {
    const {id, name} = req.body
    const response = await createBannedUser(name,id)
    return res.status(201).json(response)
  } catch (err) {
    res.status(500).send({error:'Algo ha ocurrido'})
  }
})

router.get('/banuser', async(req,res) => {
  try {
    const response = await getAllBannedUsers()
    return res.status(201).json(response)
  } catch (err) {
    res.status(500).send({error:'Algo ha ocurrido'})
  }
})

module.exports = router
