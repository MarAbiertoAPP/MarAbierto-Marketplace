const express = require('express')
const { favorite } = require('../db')
const { findUser } = require('../utils/user')
const { getNftId } = require('../utils/nft')
const router = express.Router()

// add nft to favorite
router.post('/addFavorite', async (req, res) => {
  const { idUser, idNft } = req.body
  try {
    if (!idUser || !idNft) {
      return res.status(404).send({ msg: 'some required fields missing' })
    }
    const user = await findUser(idUser)
    const nft = await getNftId(idNft)

    if (!user || !nft) {
      return res.status(404).send({ msg: 'user or nft not found' })
    }
    await favorite.create({
      userId: idUser,
      nftId: idNft
    })
    res.status(200).send({ msg: 'favorite Added!' })
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
})

// Get NFTs favorites per userID
router.get('/getUserFavorites/:idUser', async (req, res) => {
  const { idUser } = req.params
  try {
    if (!idUser) {
      res.status(404).send({ msg: 'userId is required' })
    }
    let arry = await favorite.findAll({
      where: { userId: idUser },
      attributes: ['nftId']
    })
    arry = arry.map(e => e.dataValues.nftId)
    const arrayAux = []
    for (let i = 0; i < arry.length; i++) {
      arrayAux.push(await getNftId(arry[i]))
    }
    if (!arrayAux.length) {
      res.status(404).send({ msg: 'couldnt found any like' })
    } else {
      res.status(200).send(arrayAux)
    }
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
})

module.exports = router
