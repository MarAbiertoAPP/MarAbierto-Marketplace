const { createUser, searchUser } = require('../dao/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * SingUp user
 * ALTERAR AL DARLE TOKEN CON JWT
 */
exports.signUp = async (req, res) => {
  const { name, lastname, password, email, dni, profilePicture, phone } = req.body

  try {
    const userS = await searchUser(email)
    if (userS) {
      return res.status(401).json({ msg: 'Usuario ya registrado' })
    }

    const newuser = await createUser(name,
      lastname, password, dni, profilePicture, email, phone, 'N')
    console.log(newuser)
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
    console.log(user)
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
