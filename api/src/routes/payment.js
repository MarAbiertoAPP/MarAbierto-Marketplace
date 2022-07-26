const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const stripe = require('stripe')('sk_test_51LOX0hJn83pmuJ1bI76P84K9szWTM5RdHjWAy5yzq98jpx9z03cRBOgA55NmM38O4ula4ygYSvg4NQN427SwCKhM00jebZg0hY')

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    automatic_payment_methods: { enabled: true }
  })
  const intent = paymentIntent
  res.json({ client_secret: intent.client_secret })
})

module.exports = router
