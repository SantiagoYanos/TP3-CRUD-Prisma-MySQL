const user = require('../database/User.js')

const getAllUsers = () => {

    const obtained= user.getAllUsers();

    return obtained
}

const createNewUser = (newUser) => {
    const created = user.createNewUser(newUser)

    return created
}

module.exports={
    getAllUsers,
    createNewUser
}