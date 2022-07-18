const { Router } = require('express')
const router = Router()
const { nft } = require('../db.js')

// Ruta get para traer todos los NFT's
// Inicialmente no recibe parametros
router.get('/all', async (req, res) => {
  const allNFT = await nft.findAll()
  res.json(allNFT)
})

// Ruta post para subir los NFT's
// recibe un arreglo de objetos, formato (/api/prechargue.json)
router.post('/add', async (req, res) => {
  const arrNFT = req.body
  console.log('aca')
  const arrPromisesNFT = arrNFT.map(n => {
    return nft.create({
      title: n.title,
      description: n.description,
      path: n.img,
      price: n.price
    })
  })

  await Promise.all(arrPromisesNFT)
  res.json({ data: arrNFT })
})

module.exports = router
