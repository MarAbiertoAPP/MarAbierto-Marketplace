const { createUser, searchUser } = require('../dao/user.js')
/**
 * @author Nicolas Alejandro Suarez
 * @param {} sequelize
 */
/**
 * SingUp user
 * ALTERAR AL DARLE TOKEN CON JWT
 */
exports.signUp = async (req, res) => {
  const { name, lastname, password, email, dni, profilePicture, phone, place } = req.body
  try {
    const userS = await searchUser(email)
    if (userS) {
      return res.status(401).json({ msg: 'Usuario ya registrado' })
    }
    const newuser = await createUser(name,
      lastname, password, dni, profilePicture, email, phone, 'N', place)
    res.json({
      user: newuser
    })
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'Algo ha ocurrido' })
  }
}
