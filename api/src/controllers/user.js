const { createUser, searchUser } = require('../dao/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { emailRegisterUser } = require('../dao/sendMails.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * SingUp user
 * ALTERAR AL DARLE TOKEN CON JWT
 */
exports.signUp = async (req, res) => {
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
}
/**
 * @author Tiago Cornalo
 * Signin user
 */
exports.signIn = async (req, res) => {
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
}
