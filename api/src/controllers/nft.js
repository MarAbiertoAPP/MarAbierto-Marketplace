const { createNFT, getNftId } = require('../dao/nft')

/**
 * route create Category
 */
exports.createNFT = async (req, res) => {
  try {
    const { title, description, price, path, categoryId, userId } = req.body
    const response = await createNFT(title, description, path, price, categoryId, userId)
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
