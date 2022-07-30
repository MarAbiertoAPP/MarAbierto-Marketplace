const { createNFT, getNftId, addFavorite, getFavoritesPerId } = require('../helpers/nft')

/**
 * route create Category
 */
exports.createNFT = async (req, res) => {
  try {
    const { title, description, price, path, collectionId } = req.body
    const response = await createNFT(title, description, path, price, collectionId)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}

exports.getNftId = async (req, res) => {
  try {
    const { id } = req.params
    const response = await getNftId(id)
    return response ? res.status(200).send(response) : res.status(400).send({ msg: 'Not found' })
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}

exports.addFavorite = async (req, res) => {
  try {
    const { idUser, idNft } = req.body
    res.status(200).send(await addFavorite(idUser, idNft))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}

exports.getFavoritesPerId = async (req, res) => {
  try {
    const { iduser } = req.query
    res.status(200).send(await getFavoritesPerId(iduser))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
}
