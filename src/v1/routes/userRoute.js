const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController.js')

router.get('/', userController.getAllUsers)
router.post('/', userController.createNewUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)

module.exports=router