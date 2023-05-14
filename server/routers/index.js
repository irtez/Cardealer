const express = require('express')
const auth = require('./authRouter')
const car = require('./carsRouter')
const brand = require('./brandRouter')
const message = require('./messageRouter')

const router = new express.Router()
router.use('/auth', auth)
router.use('/car', car)
router.use('/brand', brand)
router.use('/message', message)

module.exports = router