const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const user = require('./user.js')
const place = require('./place.js')
const store = require('./store.js')

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/users', user)
router.use('/place', place)
router.use('/store', store)

module.exports = router
