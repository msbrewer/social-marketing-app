const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send({data: "Some data incoming"})
})

module.exports = router
