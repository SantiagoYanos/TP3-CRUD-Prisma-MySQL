const userServices = require('../services/userServices.js')

const {Prisma} = require('@prisma/client')



const deleteUser = async (req,res) => {
    const {id} = req.params
    const deleteUser = await userServices.deleteUser(id)
    console.log(deleteUser)
    if(deleteUser===undefined)
    {
        res.status(400).send(`ERROR: Al obtener usuarios de la base de datos`)
    }
    else
    {
        res.status(200).json({message:"Usuario borrado con éxito!"})
    }

}

const updateUser = async (req,res) => {

    const {id} = req.params
    const newData = req.body
    const updateUser = await userServices.updateUser(id , newData)
    console.log(updateUser)
    if(deleteUser===undefined)
    {
        res.status(400).send(`ERROR al encontrar el usuario deseado`)
    }
    else
    {
        res.status(200).json({message:"Usuario actualizado con éxito!"})
    }
}

const getAllUsers = async (req,res) => {

    const obtained = await userServices.getAllUsers()
    console.log(obtained)
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
        return res.status(400).send('Error: Faltan datos!!')
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
    createNewUser,
    deleteUser,
    updateUser
}