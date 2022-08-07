const post = require('../database/Post.js')

const getAllPost = () => {

    const obtained = post.getAllPost();

    return obtained
}

const createNewPost = (newPost) => {
    const created = post.createNewPost(newPost)

    return created
}

module.exports={
    getAllPost,
    createNewPost
}