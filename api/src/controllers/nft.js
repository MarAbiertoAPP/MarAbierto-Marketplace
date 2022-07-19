const { createNFT } = require('../dao/nft')

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
