const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.send("Hola, estas en /probando.js")
})

module.exports = router