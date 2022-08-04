const userServices = require('../services/userServices.js')

const {Prisma} = require('@prisma/client')

const getAllUsers = async (req,res) => {

    const obtained = await userServices.getAllUsers()

    if(obtained===undefined)
    {
        res.status(400).send(`ERROR: Al obtener usuarios de la base de datos`)
    }
    else
    {
        res.status(200).json({message:"Usuarios obtenidos con éxito!", data: obtained})
    }
}

const createNewUser = async (req,res) => {

    const {name, email, age, country, rol} = req.body

    const regex = /([0-9])+/g

    if(!name || !email || !regex.test(String(age)) || !country)
    {
        return res.status(400).res('Error: Faltan datos!!')
    }
    else
    {
        const newUser = {
            name,
            email,
            age,
            country
        }

        if(rol) //Si se agregó un usuario...
        {
            newUser.rol = rol
        }

        const added = await userServices.createNewUser(newUser)

        console.log(added)

        if(added === undefined)
        {
            res.status(400).send(`ERROR: Al agregar un usuario a la base de datos`)
        }
        else
        {
            res.status(202).json({message:"Usuario creado correctamente!!", data: added})
        }
    }
}

module.exports={
    getAllUsers,
    createNewUser
}