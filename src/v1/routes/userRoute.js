const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController.js')

router.get('/', userController.getAllUsers)
router.post('/', userController.createNewUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports=router