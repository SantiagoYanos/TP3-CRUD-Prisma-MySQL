const express = require("express")
const app = express()

const probandoRouter = require("./routes/probando")
const userRouter = require('./v1/routes/userRoute.js')


//Variables
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Index')
})

app.use("/probando" , probandoRouter)

app.use('/api/v1/users', userRouter)


app.listen(PORT , () => {
    console.log("Servidor en el puerto 3000")
})
