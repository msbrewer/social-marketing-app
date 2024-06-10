const express = require("express")
const app = express()
const port = 3000

const usersRoute = require('./routes/users.js')

app.use("/users", usersRoute)

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
