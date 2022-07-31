const { transporter } = require('../utils/conectionMailer')

// Bienvida a nuevo usuario
const emailRegisterUser = async (email, nombre) => {
  await transporter.sendMail({
    from: `Mar abierto <${process.env.CORREO}>`, // sender address
    to: `${email}`, // list of receivers
    subject: `Bienvenido ${nombre}`,
    html: `
               <h1>Mar abierto</h1>
               <br>
               <p> Hola ${nombre}, tu registro fue existo gracias por unirte a la mayor red de NFT's de Latinoamérica, esperamos que tu estancia sea excelente.</p>
               <br>
               <small>
               Mar Abierto
                  <br>
                     Soy Henry
                   <br>
              </small>
               `
  })
}

module.exports = {
  emailRegisterUser
}
