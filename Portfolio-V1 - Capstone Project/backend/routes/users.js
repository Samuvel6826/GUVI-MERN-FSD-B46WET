const express = require('express')
const UserController = require("../controller/users")
const router = express.Router()

router.get('/',UserController.getUsers)

router.get('/:id', UserController.getUserById)

router.post('/', UserController.createUser)

router.put('/:id', UserController.editUserById)

router.delete('/:id', UserController.deleteUserById)

module.exports = router