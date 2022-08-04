const express = require("express")
const app = express()

const probandoRouter = require("./routes/probando")

app.use(express.json())

app.use("/probando" , probandoRouter)




app.listen(3000 , () => {
    console.log("Servidor en el puerto 3000")
})
