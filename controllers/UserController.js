const User = require('../models/User')

module.exports = {   // this is exporting of our file to use in every where
	addUser : (req, res, next) => {		
        console.log('add user')
	},
	getUser : (req, res, next) => {
        console.log('get user')
	},
	getAllUsers : (req, res, next) => {
        console.log('all users')
	}
}