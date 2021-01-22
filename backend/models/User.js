const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
    },
    hobbies: {
        type: String,
    },
    password : String,
    isAdmin : {
        type : Boolean,
        default : false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
});

module.exports = User = mongoose.model('user', userSchema);