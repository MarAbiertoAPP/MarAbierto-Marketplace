const { Router } = require('express')
const router = Router()
const { nft, Op, collection, user } = require('../db.js')
const { createNFT, getNftId, addFavorite, getFavoritesPerId } = require('../utils/nft')

// Route GET with search by name and filters
// params came by body
// pagination came by query
router.get('/', async (req, res) => {
  console.log('in')
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
    if (input.collectionId) whereQuery.collectionId = input.collectionId.split('_')
    if (input.isActive) whereQuery.isActive = input.isActive
    if (input.userId) whereQuery.userId = input.userId

    console.log(whereQuery)
    // Count the total data filtered
    const count = await nft.count({
      where: whereQuery
    })
    // Get the data with pagination
    const nftsFiltered = await nft.findAll({
      where: whereQuery,
      include: [{
        model: collection,
        attributes: ['id', 'name', 'categoryId'],
        include: [{
          model: user,
          attributes: ['nickname']
        }]
      }
      ],
      attributes: [
        'id', 'title', 'description', 'img', 'price', 'isActive'
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
      totalNFT: count,
      totalPage: Math.ceil(count / limit)
    })
  } catch (error) {
    console.log(error)
    return res.status(400).send({ msg: error })
  }
})

// Route to create a NFT
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const { title, description, img, price, collectionName, id } = req.body
    const response = await createNFT(title, description, img, price, collectionName, id)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

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

// Add favorite idUser, idNft
router.post('/nft/fav/', async (req, res) => {
  try {
    const { idUser, idNft } = req.body
    res.status(200).send(await addFavorite(idUser, idNft))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

// Get Favorite Per id
router.get('/nft/fav', async (req, res) => {
  try {
    const { iduser } = req.query
    res.status(200).send(await getFavoritesPerId(iduser))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

// GetNft per Id
router.get('/detail/:id', async (req, res) => {
  try {
    const { id } = req.params
    const response = await getNftId(id)
    return response ? res.status(200).send(response) : res.status(400).send({ msg: 'Not found' })
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

module.exports = router
