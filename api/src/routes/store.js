const { Router } = require('express')
const router = Router()
const { nft, Op, collection, category, user } = require('../db.js')
const nftController = require('../controllers/nft.js')
const { Sequelize } = require('sequelize')

/* // Route GET all NFT's
router.get('/all', async (req, res) => {
  const { offset, limit } = req.query
  try {
    const count = await nft.count({})
    const allNFT = await nft.findAll({
      offset: offset * limit,
      limit
    })

    const nftsFilteredJSON = JSON.parse(JSON.stringify(allNFT))
    const nftsParsedNumber = parsePrice(nftsFilteredJSON)

    res.status(200).json({
      nft: nftsParsedNumber,
      currentPage: offset,
      totalPage: Math.ceil(count / limit) - 1
    })
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}) */

// Route GET with search by name and filters
// params came by body
// pagination came by query
router.get('/nft', async (req, res) => {
  try {
    const input = req.query
    // Get query to order
    const orderQuery = input.order ? input.order.split('_') : ['title', 'ASC']

    // Get query of pagination
    const offset = (req.query.page - 1) || 0
    const limit = req.query.limit || 10
    const whereQuery = {}

    // Get query to search
    if (input.title) whereQuery.title = { [Op.iLike]: `%${input.title}%` }

    // Get query to filters
    if (input.price) {
      const priceMinMax = input.price.split('_')
      whereQuery.price = { [Op.between]: [Number(priceMinMax[0]), Number(priceMinMax[1])] }
    }
    if (input.categoryId) whereQuery.categoryId = input.categoryId.split('_')
    if (input.isActive) whereQuery.isActive = input.isActive
    if (input.userId) whereQuery.userId = input.userId

    // Count the total data filtered
    const count = await nft.count({
      where: whereQuery
    })
    // Get the data with pagination
    const nftsFiltered = await nft.findAll({
      where: whereQuery,
      include: [{
        model: collection,
        attributes: ['id', 'name'],
        include: [{
          model: user,
          attributes: ['nickname']
        }]
      },
      {
        model: category,
        attributes: []
      }
      ],
      attributes: [
        'id', 'title', 'description', 'path', 'price', 'isActive',
        [Sequelize.literal('"category"."name"'), 'Category']
      ],
      order: [
        orderQuery
      ],
      offset: offset * limit,
      limit
    })

    return res.status(200).json({
      nft: nftsFiltered,
      currentPage: offset,
      totalPage: Math.ceil(count / limit)
    })
  } catch (error) {
    console.log(error)
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

/**
 * Add favorite idUser, idNft
 */
router.post('/nft/fav/', nftController.addFavorite)

/**
 * Get Favorite Per id
 */

router.get('/nft/fav', nftController.getFavoritesPerId)

/**
 * GetNft per Id
 */
router.get('/nft/:id', nftController.getNftId)

module.exports = router
