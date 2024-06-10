const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
	res.send({data:{message:"Auth route"}})
})

module.exports= router
