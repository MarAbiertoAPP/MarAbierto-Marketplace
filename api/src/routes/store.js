const { Router } = require('express')
const router = Router()
const { nft, Op } = require('../db.js')
const nftController = require('../controllers/nft.js')

// Route GET all NFT's
router.get('/all', async (req, res) => {
  const allNFT = await nft.findAll()
  res.json(allNFT)
})

// Route GET with search by name and filters
// params came by query
router.get('/nft', async (req, res) => {
  const input = req.query
  const whereQuery = {}

  const AVAILABLE_QUERYS = ['title', 'price', 'categoryID']

  for (const query in input) {
    if (AVAILABLE_QUERYS.includes(query)) {
      if (query === 'title') {
        whereQuery[query] = {
          [Op.iLike]: `%${input[query]}%`
        }
      } else if (query === 'price') {
        const priceMinMax = input[query].split('_')
        whereQuery[query] = {
          [Op.between]: [Number(priceMinMax[0]), Number(priceMinMax[1])]
        }
      } else {
        whereQuery[query] = input[query]
      }
    }
  }

  console.log(whereQuery)

  const nftsFiltered = await nft.findAll({
    where: whereQuery
  })
  // console.log(nftsFiltered)
  res.send(nftsFiltered)
})

router.post('/', nftController.createNFT)

// Route POST to upload NFT's
// NFT's data came in body //revisalo...
router.post('/add', async (req, res) => {
  const arrNFT = req.body
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
