const express = require("express")
const app = express()
const port = 3000

const usersRoute = require('./routes/users.js')
const campaignsRoute = require('./routes/campaigns.js')
const authRoute = require('./routes/auth.js')

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/campaigns", campaignsRoute)

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
