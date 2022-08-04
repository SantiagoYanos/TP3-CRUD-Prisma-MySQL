const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const getAllUsers = async ()=>{

    try{

        const allUsers = await prisma.user.findMany()
        return allUsers

    }catch(err)
    {
        console.log(err)
    }
    
}

const createNewUser = async (newUser)=>{
    try
    {

    const added = await prisma.user.create({
        data: newUser
    })

    return added

    }catch(err)
    {
        console.log(err)
    }   
}

module.exports={
    getAllUsers,
    createNewUser
}