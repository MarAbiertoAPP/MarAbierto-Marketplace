require('dotenv').config()
const express = require('express')
const router = express.Router()
const { createUser, searchUser, searchByName, banAnUser, unbanAnUser, getAllBannedUsers } = require('../utils/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { user } = require('../db.js')
const nodemailer = require('nodemailer')
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
    res.status(500).send({ error: 'Algo ha ocurrido 3' })
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
    res.status(500).send({ error: 'Algo ha ocurrido 4' })
  }
})

router.get('/amount', async (req, res) => {
  try {
    const response = await user.findAll()
    return res.status(201).json(response.length)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido 5' })
  }
})

router.get('/getallusersdata', async (req, res) => {
  try {
    const response = await user.findAll()
    return res.status(201).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido 6' })
  }
})

router.get('/getuserdatabyname/:nickname', async (req, res) => {
  try {
    const { nickname } = req.params
    const response = await searchByName(nickname)
    return res.status(201).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido 7 ' })
  }
})
router.post('/makesuperuser', async (req, res) => {
  try {
    const { email } = req.body
    const response = await user.update({ typeUser: 'SU' }, { where: { email } })
    return res.status(201).json(response, { msg: 'Granted permissions' })
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido 8' })
  }
})

router.post('/removesuperuser', async (req, res) => {
  try {
    const { email } = req.body
    const response = await user.update({ typeUser: 'N' }, { where: { email } })
    return res.status(201).json(response, { msg: 'Revoked permissions' })
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido 9' })
  }
})

router.post('/banuser', async (req, res) => {
  try {
    const { id } = req.body
    await banAnUser(id)
    return res.status(201).json({ res: 'User is now banned' })
  } catch (err) {
    res.status(500).send({ error: 'Algo ha ocurrido 10' })
  }
})

router.post('/unbanuser', async (req, res) => {
  try {
    const { id } = req.body
    await unbanAnUser(id)
    return res.status(201).json({ res: 'User is now unbanned' })
  } catch (err) {
    res.status(500).send({ error: 'Algo ha ocurrido 11' })
  }
})

router.get('/banned', async (req, res) => {
  try {
    const response = await getAllBannedUsers()
    return res.status(201).json(response)
  } catch (err) {
    res.status(500).send({ error: 'Algo ha ocurrido 12' })
  }
})

router.post('/sendmail', async (req, res) => {
  const { nickname, nftFromCart, userEmail } = req.body
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS

      }
    })

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: userEmail,
      subject: 'Mar Abierto thanks for buying',
      html: `
          <h1  style="color:black ;text-align:center; font-weight:400"  >Mar abierto</h1>
          <br>
          <p  style="color:blue ;text-align: center; font-weight:500">Thank you ${nickname} for Buying on MAR ABIERTO</p>
<div>    
${nftFromCart?.map((nft) => {
  return `<img src=${nft.img} alt="nft-image" />

  <h2 style="color:black ; text-align: center" >${nft.title}</h2>`
})}


</div>

<br>

`

    })
    return res.send({ msg: 'correo enviado!' })
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

// search the user by id in params
router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('hhsddssjgdj')
    const response = await user.findOne({ where: { id } })
    return res.status(201).json(response)
  } catch (err) {
    res.status(500).send({ error: 'Algo ha ocurrido 13' })
  }
})

module.exports = router
