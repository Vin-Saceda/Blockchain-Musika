const userController = require('../controllers/UserController')
var jwtAuthMiddleware = require("./../middlewares/JwtAuthMiddleware")

module.exports = router => {
    router.route('/user').post(jwtAuthMiddleware, userController.addUser)
    router.route('/user/:id').get(jwtAuthMiddleware, userController.getUser)
    router.route('/users').get(jwtAuthMiddleware, userController.getAllUsers)
}