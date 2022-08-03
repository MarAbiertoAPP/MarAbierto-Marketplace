const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  const stripe = require('stripe')('sk_test_51LOPfmJVPjWVJr6NDta3q2uCWz3RWP6yUKDCMd9H0K8WMrsxPUXmNztykwbtRNkZSYU2GPF6qXfgO4jxz9GhdrS000PyVtq2T6')
  const { nftValue } = req.body
  // console.log(nftValue.totalBuy)
  // const idValue = nftValue.totalBuy
  // console.log(nftValue.ethereumValue)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(((nftValue.ethereumValue * nftValue.totalBuy) * 100).toFixed(0)),
    currency: 'usd',
    automatic_payment_methods: { enabled: true }
  })
  const intent = paymentIntent
  res.json({ client_secret: intent.client_secret })
  // console.log(Number(((nftValue.ethereumValue * nftValue.totalBuy) * 100).toFixed(2)))
})

module.exports = router
