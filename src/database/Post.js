const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPost = async () =>  {
    try {
        const allPost = await prisma.post.findMany()
        return allPost
    } 
    catch(err) 
    {
        console.log(err)
    }
}

const createNewPost = async (newPost)=>{
    try
    {

    const added = await prisma.post.create({
        data: newPost
    })

    return added

    }catch(err)
    {
        console.log(err)
    }   
}


module.exports={
    getAllPost,
    createNewPost
}