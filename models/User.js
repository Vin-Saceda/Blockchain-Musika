const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            maxlength: 50
        },
        lastName: {
            type: String,
            maxlength: 50
        },
        email: {
            type: String,
            trim: true,
            unique: 1
        },
        password: {
            type: String,
            minlength: 5
        }
    }
)

module.exports = mongoose.model('User', userSchema)