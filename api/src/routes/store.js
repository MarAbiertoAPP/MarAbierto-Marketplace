const { Router } = require('express')
const router = Router()
const { nft, Op } = require('../db.js')
const nftController = require('../controllers/nft.js')

// Route GET all NFT's
router.get('/all', async (req, res) => {
  const { offset, limit } = req.query
  try {
    const count = await nft.count({})
    const allNFT = await nft.findAll({
      offset: offset * limit,
      limit
    })
    res.status(200).json({
      nft: allNFT,
      currentPage: offset,
      totalPage: Math.ceil(count / limit)
    })
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

// Route GET with search by name and filters
// params came by query
router.get('/nft', async (req, res) => {
  try {
    const input = req.query
    const whereQuery = {}

    const AVAILABLE_QUERYS = ['title', 'price', 'categoryId', 'isActive', 'userId']

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

    const nftsFiltered = await nft.findAll({
      where: whereQuery
    })

    return res.status(200).json(nftsFiltered)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

router.post('/', nftController.createNFT)

// Route POST to upload NFT's
// NFT's data came in body //revisalo...
router.post('/add', async (req, res) => {
  try {
    const arrNFT = req.body

    const arrPromisesNFT = arrNFT.map(n => {
      return nft.create({
        title: n.title,
        description: n.description,
        path: n.img,
        price: n.price,
        userId: n.userId,
        categoryId: n.categoryId
      })
    })

    const nftsCreated = await Promise.all(arrPromisesNFT)

    res.status(200).json(nftsCreated)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

module.exports = router
