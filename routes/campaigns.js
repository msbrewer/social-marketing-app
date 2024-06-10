const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send({data:{message:"Campaign routes"}})
})

module.exports = router
