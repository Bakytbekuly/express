const express = require("express")
const app = express()
const port = 3020

const user = {
	name: "Rustem",
}

app.get("/user", (req, res) => res.send(user))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
