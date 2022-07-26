const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const user = require('./user.js')
const store = require('./store.js')
const category = require('./category.js')
const payment = require('./payment')

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/users', user)
router.use('/stores', store)
router.use('/categories', category)
router.use('/secret', payment)

module.exports = router
