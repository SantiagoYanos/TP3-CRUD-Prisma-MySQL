const postServices = require('../services/postServices.js')
const {Prisma} = require('@prisma/client')

const {isNumber} = require('../regex/regex.js')

const getAllPost = async (req,res) => {

    const obtained = await postServices.getAllPost()
    console.log(obtained)
    if(obtained===undefined)
    {
        res.status(400).send(`ERROR al obtener los post de la base de datos`)
    }
    else
    {
        res.status(200).json({message:"Post obtenidos con éxito!", data: obtained})
    }
}


/*
id        Int      @id @default(autoincrement())
  title     String?
  content   String
  createdAt DateTime @default(now())
  published Boolean  @default(false)
  authorId  Int
*/


const createNewPost = async (req,res) => {
    const {title,content, authorId} = req.body

    if(!title || !content || !authorId){
        return res.status(400).send('Error: Faltan datos!!')
    }else {
        const newPost = {
            title,
            content,
            authorId
        }

        const added = await postServices.createNewPost(newPost)
        console.log(added)

        if(added === undefined)
        {
            res.status(400).send(`ERROR: Al agregar un post a la base de datos`)
        }
        else
        {
            res.status(202).json({message:"Post creado correctamente!!", data: added})
        }
    }
}

const updatePost = async (req,res) => {

    const id = req.params.id

    const newData = req.body

    if(!isNumber.test(String(id))){
        return res.status(400).send('Error: Faltan datos!!')
    }
    else
    {
        const edited = await postServices.updatePost(Number(id), newData)

        if(edited === undefined)
        {
            res.status(400).send(`ERROR: Al editar un post de la base de datos`)
        }
        else
        {
            res.status(202).json({message:"Post editado correctamente!!", data: edited})
        }
    }

}

const deletePost = async (req,res) => {

    const id = req.params.id

    if(!isNumber.test(String(id)))
    {
        return res.status(400).send('Error: Faltan datos!!')
    }
    else
    {
        const deleted = await postServices.deletePost(Number(id))

        if(deleted===undefined)
        {
            res.status(400).send(`ERROR: Al eliminar un post de la base de datos`)
        }
        else
        {
            res.status(202).json({message:"Post eliminado correctamente!!", data: deleted})
        }
    }

}

module.exports={
    getAllPost,
    createNewPost,
    updatePost,
    deletePost
}