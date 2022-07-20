const nodemailer = require('nodemailer')

/**
 * Archivo para verificar conexión con el email para enviar correos
 *
 * @author Nicolas Alejandro Suarez
 */

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

transporter.verify()
  .then(() => {
    console.log('Servidor listo para enviar correos')
  })
  .catch((err) => {
    console.log(`Servidor NO puede enviar correos ${err}`)
  })

module.exports = { transporter }
