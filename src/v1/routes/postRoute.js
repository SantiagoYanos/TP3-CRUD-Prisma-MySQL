const express = require('express')
const router = express.Router()

const postController = require('../../controllers/postController.js')

router.get('/', postController.getAllPost)
router.post('/', postController.createNewPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

module.exports=router