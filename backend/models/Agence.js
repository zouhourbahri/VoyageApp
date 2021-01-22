const mongoose = require('mongoose');

const agenceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    name:{
        type: String,
    },
    email: {
        type:String,
    },
    phoneNumber:{
        type: String,
    },
    password: {
        type:String,
    },
    isBanned: {
        type:Boolean,
        default: false,
    },
    isAdmin: {
        type:Boolean,
        default: false,
    },
    Rating: [
        {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            reference: "users",
        },
        rate: Number,
        },
    ],
});

module.exports = Agence = mongoose.model('agence', agenceSchema);