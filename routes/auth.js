const authController = require('../controllers/AuthController')

module.exports = router => {
    router.route('/login').post(authController.loginAttempt)
    router.route('/user').get(authController.checkToken)
}