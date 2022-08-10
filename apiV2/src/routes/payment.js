const express = require('express')
const { statusNft } = require('../utils/nft')
const router = express.Router()

router.post('/', async (req, res) => {
  const stripe = require('stripe')('sk_test_51LOPfmJVPjWVJr6NDta3q2uCWz3RWP6yUKDCMd9H0K8WMrsxPUXmNztykwbtRNkZSYU2GPF6qXfgO4jxz9GhdrS000PyVtq2T6')
  const { nftValue } = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(((nftValue.ethereumValue * nftValue.totalBuy) * 100).toFixed(0)),
    currency: 'usd',
    automatic_payment_methods: { enabled: true }

  })

  const intent = paymentIntent
  res.json({ client_secret: intent.client_secret })
})

router.post('/change-status/', async (req, res) => {
  try {
    const { id, ownerId } = req.body
    return res.status(200).send(await statusNft(id, ownerId))
  } catch (error) {
    return res.status(400).send({ msg: error })
  }
})

module.exports = router
