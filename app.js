const express = require("express")
const app = express()
const findId = require("./functions/find")
const PORT = 3000

app.get("/id=:id", findId)  

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`)
})
