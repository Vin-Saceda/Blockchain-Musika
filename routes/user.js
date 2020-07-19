const userController = require('../controllers/UserController')

module.exports = router => {
    router.route('/user').post(userController.addUser)
    router.route('/user/:id').get(userController.getUser)
    router.route('/users').get(userController.getAllUsers)
}