const { Router } = require('express')
const router = Router()
const { nft } = require('../db.js')

// Ruta get para traer todos los NFT's
// Inicialmente no recibe parametros
router.get('/all', async (req, res) => {
  const allNFT = await nft.findAll()
  res.json(allNFT)
})

module.exports = router
