const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const stripe = require('stripe')('sk_test_51LOPfmJVPjWVJr6NDta3q2uCWz3RWP6yUKDCMd9H0K8WMrsxPUXmNztykwbtRNkZSYU2GPF6qXfgO4jxz9GhdrS000PyVtq2T6')
  const { amount } = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    automatic_payment_methods: { enabled: true }
  })
  const intent = paymentIntent
  res.json({ client_secret: intent.client_secret })
})

module.exports = router
